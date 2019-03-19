const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on('ready', ()=>{
  console.log(`Logged in as ${client.user.tag}! Welcome Back`);
  client.user.setActivity("Twitch.tv/asdrtyuip", {type: 1});
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome-leave');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField(':bust_in_silhouette: | name : ', `${member}`)
      .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
      .addField(':id: | User :', "**[" + `${member.id}` + "]**")
      .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true )
      .setFooter(`**${member.guild.name}**`)
      .setTimestamp()

      channel.sendEmbed(embed);
});
client.on('guildMemberAdd', member => {

  console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find('name', 'welcome-leave');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Name:', `${member}`)
      .addField('Has Let the Server', ';(')
      .addField('Bye Bye :(', 'We will all miss you!')
      .addField('The server now as', `${member.guild.memberCount}` + " members")
      .setFooter(`**${member.guild.name}`)
      .setTimestamp()

      channel.sendEmbed(embed);
});
client.on('guildMemberRemove', member => {
  console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
  console.log("Leave Message Sent")
});


client.on('message', (message)=>{
  if(!message.content.startsWith(prefix)) return;

  if(message.content.startsWith(prefix + "ip")){
      message.channel.send("RolePlay Server:**LeagicRP**");
      message.channel.send("RolePlay Server:**IP: 185.38.151.237 / Port: 28265**");
    }
    if(message.content.startsWith(prefix + "job")){
      message.channel.send("`Requested Promote by`"  + message.author + ".");
      message.channel.send("`Form` **Why do u think you will be Promoted: Awnser**");
      message.channel.send("`Form` **what have You done to Marino Family that others are intressted: Awnser**");
    }



  if(message.content.startsWith(prefix + "Info")){
    message.channel.send("**`Command's / info`**");
    message.channel.send({embed:{
      color: 0xee00ff,
      description: "**Help? : Marino Family / !ip !job  This Bot Will be Soon 24/7**"

    }});
    return;

  
      }
      if(message.content.startsWith(prefix + "iorgher'gerererqe")){
        let author = message.member;
        let role = message.guild.roles.find('name',"-Access-");
        if(author.roles.has(role.id)){
         message.author.send("`You Have Permissions` **To Private VC this Will be Removed in 1 Day**");
          return;
   
        }else{
          message.reply("you dont have Permissions.`To -Access-` Ask an high rank");
      }
    }
})

        client.login("NDg1MjA1MDM3NjM1ODYyNTMw.D3Fj-g.a5T_ObfTgKvF4CWLCYlKb85PlGY");
