import Head from 'next/head'
import Layout from '@/components/Layout'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "快速响应",
      description: "24小时内响应客户需求，提供及时的技术支持和解决方案。"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "专业团队",
      description: "拥有多年经验的专业团队，为您提供最优质的服务。"
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "品质保证",
      description: "严格的质量控制流程，确保每个项目都达到最高标准。"
    }
  ]

  const testimonials = [
    {
      name: "张先生",
      company: "科技有限公司",
      content: "服务非常专业，团队响应速度很快，项目质量超出预期。",
      rating: 5
    },
    {
      name: "李女士",
      company: "创新企业",
      content: "合作过程非常愉快，技术实力强，值得信赖的合作伙伴。",
      rating: 5
    },
    {
      name: "王总",
      company: "发展集团",
      content: "专业的团队，优质的服务，为我们的业务发展提供了强有力的支持。",
      rating: 5
    }
  ]

  return (
    <>
      <Head>
        <title>首页 - 我的独立站</title>
        <meta name="description" content="专业的服务提供商，为您的业务提供最优质的解决方案" />
      </Head>
      
      <Layout>
        {/* 英雄区域 */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                专业的
                <span className="text-primary-600"> 解决方案</span>
                <br />
                助力您的业务成长
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                我们提供专业的技术服务和创新解决方案，帮助您的企业在数字化时代保持竞争优势，实现可持续发展。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center">
                  开始合作
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors duration-200">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 特色服务 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么选择我们
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                我们致力于为客户提供最优质的服务体验
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 数据统计 */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-primary-100">成功项目</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-primary-100">客户满意度</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">5年</div>
                <div className="text-primary-100">行业经验</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-primary-100">技术支持</div>
              </div>
            </div>
          </div>
        </section>

        {/* 客户评价 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                客户评价
              </h2>
              <p className="text-xl text-gray-600">
                听听我们的客户怎么说
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA区域 */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              准备开始您的项目了吗？
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              联系我们，让我们一起讨论如何帮助您实现业务目标
            </p>
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center">
              立即联系我们
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </Layout>
    </>
  )
}

