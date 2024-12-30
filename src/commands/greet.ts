import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('greet')
		.setDescription('Greets an user!'),
	async execute(interaction: ChatInputCommandInteraction) {
		interaction.reply("hellouw ^-^")			
	},
};