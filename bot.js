client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("s"))  return;
  let args = message.content.split("NTYyMzUyMTIzNzI0MTY5MjE5.XN7nOA.2JbJ_7IAh7qcg3yjdp70xSOHIhQ").slice(1);
  var argresult = args.join('!');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};    
});