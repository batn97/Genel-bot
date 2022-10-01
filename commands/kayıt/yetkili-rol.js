const Discord = require('discord.js');
const AloneDogru = "#22BF41";
const AloneHata = "#f30707"
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik} = require("../../emojiler.json")

module.exports = {
 name: 'yetkilirol',
 aliases: ["yetkili-rol"] ,
 description: 'Kayıt sistemi yetkili rolünü ayarlarsınız.',
    usage: ['yetkilirol [ @rol ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
const nn = new Discord.MessageEmbed().setThumbnail();
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`**${message.author.username}** Bu komutu kullanmak için \`Yönetici\` iznine sahip olman gerekli.`))
let role = message.mentions.roles.first();
if(!role) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bir rol etiketlemeyi unuttunuz.`))
kayit.set(`yetkili.${message.guild.id}`, role.id);
message.channel.send(nn.setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`${tik} Kayıt sistemi yetkili rolünü ${role} rol olarak ayarladım.`).setColor(AloneDogru))
}
}
