const Command = require("../../structures/Command");
const ClientEmbed = require("../../structures/ClientEmbed");
const Emojis = require("../../utils/Emojis");

module.exports = class McBody extends Command {
  constructor(client) {
    super(client);
    this.client = client;

    this.name = "mcbody";
    this.category = "Minecraft";
    this.description = "Comando para pegar o Body de uma Skin de Minecraft.";
    this.usage = "mcbody";
    this.aliases = ["mc-body"];

    this.enabled = true;
    this.guildOnly = true;
  }

  async run({ message, args, prefix, author }, t) {
    const nick = args[0];

    if (!nick)
      return message.reply(
        `${message.author}, você deve inserir um nick de uma skin de minecraft.`
      );

    const EMBED = new ClientEmbed(author)

      .setTitle(`${Emojis.Minecraft} - Nick: ${nick}`)
      .setImage(`https://mc-heads.net/body/${nick}`);

    message.reply({embeds: [EMBED]});
  }
};
