/**
 * ViewOnce Stealer - Reply with .VV
 */

const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

module.exports = {
  name: 'viewonce',
  aliases: ['steal', 'vv', 'C--P', 'readvo'],
  category: 'general',
  description: 'Reply .VV to a view-once to steal it to your DM',
  usage: '.VV (reply to view-once message)',
  
  async execute(sock, msg, args) {
    try {
      const chatId = msg.key.remoteJid;

      // Get quoted message
      const ctx = msg.message?.extendedTextMessage?.contextInfo
        || msg.message?.imageMessage?.contextInfo
        || msg.message?.videoMessage?.contextInfo
        || msg.message?.buttonsResponseMessage?.contextInfo
        || msg.message?.listResponseMessage?.contextInfo;

      if (!ctx?.quotedMessage) {
        return await sock.sendMessage(chatId, { 
          text: '❌ Reply to a *view-once* message with `.VV`' 
        }, { quoted: msg });
      }

      const quotedMsg = ctx.quotedMessage;

      // Check if it's a view-once
      const hasViewOnce = 
        !!quotedMsg.viewOnceMessageV2 || 
        !!quotedMsg.viewOnceMessageV2Extension || 
        !!quotedMsg.viewOnceMessage ||
        !!quotedMsg.viewOnce ||
        !!quotedMsg?.imageMessage?.viewOnce ||
        !!quotedMsg?.videoMessage?.viewOnce ||
        !!quotedMsg?.audioMessage?.viewOnce;

      if (!hasViewOnce) {
        return await sock.sendMessage(chatId, { 
          text: '❌ This is not a view-once message!' 
        }, { quoted: msg });
      }

      let actualMsg = null;
      let mtype = null;

      if (quotedMsg.viewOnceMessageV2Extension?.message) {
        actualMsg = quotedMsg.viewOnceMessageV2Extension.message;
        mtype = Object.keys(actualMsg)[0];
      } else if (quotedMsg.viewOnceMessageV2?.message) {
        actualMsg = quotedMsg.viewOnceMessageV2.message;
        mtype = Object.keys(actualMsg)[0];
      } else if (quotedMsg.viewOnceMessage?.message) {
        actualMsg = quotedMsg.viewOnceMessage.message;
        mtype = Object.keys(actualMsg)[0];
      } else if (quotedMsg.imageMessage?.viewOnce) {
        actualMsg = { imageMessage: quotedMsg.imageMessage };
        mtype = 'imageMessage';
      } else if (quotedMsg.videoMessage?.viewOnce) {
        actualMsg = { videoMessage: quotedMsg.videoMessage };
        mtype = 'videoMessage';
      } else if (quotedMsg.audioMessage?.viewOnce) {
        actualMsg = { audioMessage: quotedMsg.audioMessage };
        mtype = 'audioMessage';
      }

      if (!actualMsg || !mtype) {
        return await sock.sendMessage(chatId, { 
          text: '❌ Unsupported view-once type.' 
        }, { quoted: msg });
      }

      const downloadType = mtype.includes('image') ? 'image' : 
                          mtype.includes('video') ? 'video' : 'audio';

      const mediaStream = await downloadContentFromMessage(actualMsg[mtype], downloadType);

      let buffer = Buffer.from([]);
      for await (const chunk of mediaStream) {
        buffer = Buffer.concat([buffer, chunk]);
      }

      const sender = ctx.participant || msg.key.remoteJid;
      const senderName = msg.pushName || sender.split('@')[0] || 'Unknown';
      const caption = `C--P Stole that @${sender.split('@')[0]}\nFrom: ${senderName}`;

      // Send to your DM
      const ownerJid = sock.user.id.split(':')[0] + '@s.whatsapp.net';

      const isImage = mtype.includes('image');
      await sock.sendMessage(ownerJid, {
        [isImage ? 'image' : 'video']: buffer,
        caption: caption,
        mentions: [sender]
      });

      await sock.sendMessage(chatId, { 
        text: '✅☯️ *Stolen successfully!* Sent to your DM.' 
      }, { quoted: msg });

    } catch (error) {
      console.error('ViewOnce Error:', error);
      await sock.sendMessage(msg.key.remoteJid, {
        text: `❌ Error: ${error.message}`
      }, { quoted: msg });
    }
  }
};
