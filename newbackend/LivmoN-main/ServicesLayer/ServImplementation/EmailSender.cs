﻿using DataLayer.Models;
using MailKit.Net.Smtp;
using MimeKit;
using ServicesLayer.ServInterface;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace ServicesLayer.ServImplementation
{
    public class EmailSender : IEmailSender
	{

		/*private readonly IConfiguration _config;

		public EmailSender(IConfiguration config)
		{
			_config = config;

		}
		public async Task SendEmailAsync(string fromAddress, string toAddress, string subject, string message)
		{
			var mailMessage = new MailMessage(fromAddress, toAddress, subject, message);

			using (var client = new SmtpClient(_config["SMTP:Host"], int.Parse(_config["SMTP:Port"]))
			{
				Credentials = new NetworkCredential(_config["SMTP:Username"], _config["SMTP:Password"])
			})
			{
				await client.SendMailAsync(mailMessage);
			}
		}*/
		private readonly EmailConfiguration _emailConfig;
		public EmailSender(EmailConfiguration emailConfig)
		{
			_emailConfig = emailConfig;
		}
		public void SendEmail(Message message)
		{
			var emailMessage = CreateEmailMessage(message);
			Send(emailMessage);
		}
		private MimeMessage CreateEmailMessage(Message message)
		{
			var emailMessage = new MimeMessage();
			emailMessage.From.Add(new MailboxAddress(_emailConfig.From));
			emailMessage.To.AddRange(message.To);
			emailMessage.Subject = message.Subject;
			emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Text) { Text = message.Content };

			return emailMessage;
		}

		private void Send(MimeMessage mailMessage)
		{
			using (var client = new SmtpClient())
			{
				try
				{
					client.Connect(_emailConfig.SmtpServer, _emailConfig.Port, true);
					client.AuthenticationMechanisms.Remove("XOAUTH2");
					client.Authenticate(_emailConfig.UserName, _emailConfig.Password);

					client.Send(mailMessage);
				}
				catch
				{
					//log an error message or throw an exception or both.
					throw;
				}
				finally
				{
					client.Disconnect(true);
					client.Dispose();
				}
			}
		}
		public async Task SendEmailAsync(Message message)
		{
			var mailMessage = CreateEmailMessage(message);
			await SendAsync(mailMessage);
		}

		private async Task SendAsync(MimeMessage mailMessage)
		{
			using (var client = new SmtpClient())
			{
				try
				{
					await client.ConnectAsync(_emailConfig.SmtpServer, _emailConfig.Port, true);
					client.AuthenticationMechanisms.Remove("XOAUTH2");
					await client.AuthenticateAsync(_emailConfig.UserName, _emailConfig.Password);

					await client.SendAsync(mailMessage);
				}
				catch
				{
					//log an error message or throw an exception, or both.
					throw;
				}
				finally
				{
					await client.DisconnectAsync(true);
					client.Dispose();
				}
			}
		}
	}
}
