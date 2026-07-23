/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348061757693'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Evil C-Jax'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'C-Jax Bot',
    prefix: '☯️',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBT8l3rVaFlkM+JGjCCKC4qKuEz0QwEFFLJoUcjS4b9P4O3bfR9mOu681RZ58mTmqR8gy3GBlqgBox/gRvADUtQtaXNDYATUMggQAX3gQwrBCIgWDSPHtx5zErV3BnNpXDPyPjav+SJaSPwFD9zCWF2o7r2BZx/cSjfB3h8AA3kQWCdYiHconIkhhdXGETJzn3O70Fbj5bRNkOTXcZOO38CzQ4SY4CzUbxFKEYHJEjUWxORr9KE5UHdyTibjuj3eULgoeMKsAnzOPQX7XLiWtXvBHVqPk79G3044/aQXBkJneBzuSl1d3nrDgQYdHDrozt5te6ZIFXM0mHf6BQ4z5M99lFFMmy/rLi93YlM+/NWujar1fMjrm0pbLxP3rFiJpMzRdq6FOKhoZn5R93WwGPhb7Na8pCbDs5saUSgaihHMVI41zVkQyugcVaJTfSZukY+sXP+P7s1i5Se6JJ/lY8O3LCvxvXssw9SrNxhDu5kLNvSVU34ziq/RL3vS6UFFrXQcSaoqZX4w0/QwC+TjQV9v2KmSMac1ZVtX+6Q7pCX5E0tuqbkxFBRH3OXuik7sRcNffaXqOWadTpS0JRQGZ28CF9kWl5PryZNxLAr+fjq57I9XBRJVPI4vzl1Uz9EC8bsNtMPw7dXRFTVzH4zYZx8QFOKCEkhxnr3ORK4PoP/YI48g+pIXXFf2IJ/Fk8Awzju0dhuh5AgeNucdCw3z5F6UIN3ztWof5TfQBzeSe6gokG/gguakMVFRwBAVYPT39z7IUE3fjevK8WwfBJgU9JCVtySH/oerH5fQ8/Iyo/sm87RugQgYMb+PEaU4C4tOxzKDxIvwA2kRpAUYBTAp0K8OEUE+GFFSol9Tq+V+J7xwZBdniddBH6QvQ7Dfyc8PZUZkJUESFX7ES38V36oOF95u3zJEQR8kr3esIrACy8pDhpE4WeledhfPXxQ7RB9RiJMCjIC2nDCZrKv6GpsDOp/NxmY41sIx+N3SRzbetU/XgRRH1v1hr3n23NtAtifZpaWbCJlUcY1VPoPTlrSLw/ztX0C6dLrTyUMb1vSWnLhHrsVyvTiYe++omiKsHxGNxxbkI5QK0UHOzPX6odDe1OTa8ORUw9oNNttqu4eOUMf7677kc28WT6q3rpqPHthDn4udVn5C0YVNqBfFkUlc1Z5tzUW+EaFyUjbj4920603QTnZ6vFpMo019ueiC4/FMnLZbC1r11MKqKxOFmVtxz2/Qzgy376l9TU3y87fCrzx1ZnXbAKPX8Gews/AL5r0z70LGPPufQH7+J/8xk+olPvWGQ1skTOsrRytOaVAyUlxPjCxeBce6EdU08kS5cTTwfH7vg1sCaZCTtPvuM5/k2Ad9QPKyS+08C/I/FNPG4Vzdhvuu9QQWdPx7EmycooLC9AZGrCQPxaHAscLzH0ni3IY/BwAA',
    newsletterJid: '0029Vb8mV0bKWEKx1JOf2J26@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'C-Jax Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅☯️ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type ☯️menu for help'
    },
    
    // Timezone
    timezone: 'African/Lagos',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/C-Jax r',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@cjax'
    }
};
  
