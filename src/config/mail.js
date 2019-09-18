export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '39bc070d9b1da4',
    pass: '23a707a7563a30',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com.br>',
  },
};

// Serviços de disparo de e-mail
// Para Ambientes de produção
// Amazon SES
// Mailgun
// Sparkpost
// Mandril (Mailchimp)

// Para ambiente de desenvolvimento
// Mailtrap (DEV)
