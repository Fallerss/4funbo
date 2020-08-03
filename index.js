const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', ()=>{
  client.user.setActivity('4F un Server.', {type: 'PLAYING'})
  console.log('workin..')
})
client.on('message', message =>{

  if(message.author.id === '739647450582745109') return;
  if(message.channel.id === '738145650792988732' || message.channel.id === '739650216248213545') {
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`\n${message.content}`)
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setColor('BLUE')
  message.delete();
  message.channel.send(embed).then(e=>{
    e.react('739655300789043281')
  })
  }else{
    return;
  }

})





client.login(process.env.token)