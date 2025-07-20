import Head from 'next/head'
import Layout from '@/components/Layout'
import { Code, Palette, Smartphone, Globe, BarChart, Shield } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary-600" />,
      title: "网站开发",
      description: "专业的网站开发服务，包括企业官网、电商平台、管理系统等。",
      features: ["响应式设计", "SEO优化", "性能优化", "安全防护"],
      price: "¥5,000起"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary-600" />,
      title: "移动应用",
      description: "iOS和Android原生应用开发，以及跨平台解决方案。",
      features: ["原生开发", "跨平台方案", "UI/UX设计", "应用商店上架"],
      price: "¥15,000起"
    },
    {
      icon: <Palette className="w-12 h-12 text-primary-600" />,
      title: "UI/UX设计",
      description: "专业的用户界面和用户体验设计，提升产品的易用性。",
      features: ["用户研究", "原型设计", "视觉设计", "交互设计"],
      price: "¥3,000起"
    },
    {
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      title: "数字营销",
      description: "全方位的数字营销服务，帮助您扩大品牌影响力。",
      features: ["SEO优化", "社交媒体", "内容营销", "广告投放"],
      price: "¥2,000起"
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary-600" />,
      title: "数据分析",
      description: "专业的数据分析服务，为您的业务决策提供数据支持。",
      features: ["数据收集", "分析报告", "可视化图表", "业务洞察"],
      price: "¥4,000起"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: "技术咨询",
      description: "专业的技术咨询服务，为您的技术选型和架构设计提供建议。",
      features: ["技术选型", "架构设计", "性能优化", "安全评估"],
      price: "¥1,000/小时"
    }
  ]

  const process = [
    {
      step: "01",
      title: "需求分析",
      description: "深入了解您的业务需求和目标，制定详细的项目方案。"
    },
    {
      step: "02",
      title: "方案设计",
      description: "基于需求分析结果，设计最适合的技术方案和实施计划。"
    },
    {
      step: "03",
      title: "开发实施",
      description: "按照既定方案进行开发，定期汇报进度，确保项目按时交付。"
    },
    {
      step: "04",
      title: "测试验收",
      description: "全面测试项目功能，确保质量达标，协助客户进行验收。"
    },
    {
      step: "05",
      title: "上线部署",
      description: "协助项目上线部署，提供技术支持，确保平稳运行。"
    },
    {
      step: "06",
      title: "维护支持",
      description: "提供持续的技术支持和维护服务，保障系统稳定运行。"
    }
  ]

  return (
    <>
      <Head>
        <title>服务 - 我的独立站</title>
        <meta name="description" content="了解我们提供的专业服务" />
      </Head>
      
      <Layout>
        {/* 页面标题 */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              我们的服务
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              提供全方位的技术服务，满足您的各种业务需求
            </p>
          </div>
        </section>

        {/* 服务列表 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-4">
                      {service.price}
                    </div>
                    <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                      了解详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 服务流程 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                服务流程
              </h2>
              <p className="text-xl text-gray-600">
                标准化的服务流程，确保项目高质量交付
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA区域 */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              需要专业的技术服务？
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              联系我们，获取免费的项目咨询和报价
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                免费咨询
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                查看案例
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

