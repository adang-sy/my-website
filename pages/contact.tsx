import Head from 'next/head'
import Layout from '@/components/Layout'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言，我们会尽快与您联系！')
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: "邮箱地址",
      content: "contact@example.com",
      description: "随时发送邮件给我们"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: "联系电话",
      content: "+86 138 0000 0000",
      description: "工作时间内可直接致电"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: "办公地址",
      content: "北京市朝阳区xxx大厦",
      description: "欢迎预约到访"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "工作时间",
      content: "周一至周五 9:00-18:00",
      description: "节假日可留言"
    }
  ]

  return (
    <>
      <Head>
        <title>联系我们 - 我的独立站</title>
        <meta name="description" content="联系我们获取专业的技术服务" />
      </Head>
      
      <Layout>
        {/* 页面标题 */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              联系我们
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              有任何问题或需求，欢迎随时与我们联系
            </p>
          </div>
        </section>

        {/* 联系信息和表单 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 联系信息 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  联系方式
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary-600 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    为什么选择我们？
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      专业的技术团队，丰富的项目经验
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      24小时内响应，快速解决问题
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      透明的价格，优质的服务
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      完善的售后支持，长期合作伙伴
                    </li>
                  </ul>
                </div>
              </div>

              {/* 联系表单 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  发送消息
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        电话
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入您的电话"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        主题 *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">请选择咨询主题</option>
                        <option value="website">网站开发</option>
                        <option value="mobile">移动应用</option>
                        <option value="design">UI/UX设计</option>
                        <option value="marketing">数字营销</option>
                        <option value="consulting">技术咨询</option>
                        <option value="other">其他</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      详细需求 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="请详细描述您的需求..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 地图区域 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                我们的位置
              </h2>
              <p className="text-xl text-gray-600">
                欢迎到访我们的办公室
              </p>
            </div>
            <div className="bg-gray-300 h-96 rounded-xl flex items-center justify-center">
              <p className="text-gray-600">
                地图区域 - 可以集成百度地图或高德地图
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

