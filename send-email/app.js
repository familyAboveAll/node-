var email = require('nodemailer')
var config = {
  host: 'smtp.sina.com', //SMTP是发送邮件的协议
  port: 25,
  auth: {
    user: '', //发件人邮箱
    pass: '' //发件人邮箱密码
  }
}
var transporter = email.createTransport(config)

var options = {
  from: 'b13180067319@sina.cn',
  to: '1370437662@qq.com',
  subject: '测试node发送邮件',
  html: '你好，这是一封来自hoylyn的邮件！', //支持html格式
  attachments: [{ //附件
    filename: 'monstax.jpg',
    path: './imgs/1.jpg'
  }]
}

transporter.sendMail(options, function(error, info) {
  if (error) {
    return console.log(error)
  }
  console.log(info.response)
})