import Head from 'next/head'
import Layout from '@/components/Layout'
import { Target, Eye, Heart, Users } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "专业专注",
      description: "我们专注于提供最专业的技术服务，不断提升自身能力。"
    },
    {
      icon: <Eye className="w-8 h-8 text-primary-600" />,
      title: "创新视野",
      description: "保持对新技术的敏感度，为客户提供前沿的解决方案。"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "用心服务",
      description: "以客户为中心，用心对待每一个项目和每一位客户。"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "团队协作",
      description: "发挥团队优势，通过协作创造更大的价值。"
    }
  ]

  const team = [
    {
      name: "张总",
      position: "创始人 & CEO",
      description: "拥有10年行业经验，致力于为客户提供最优质的服务。"
    },
    {
      name: "李经理",
      position: "技术总监",
      description: "资深技术专家，负责技术架构和团队管理。"
    },
    {
      name: "王设计师",
      position: "设计总监",
      description: "创意设计专家，为项目提供优秀的视觉设计。"
    }
  ]

  return (
    <>
      <Head>
        <title>关于我们 - 我的独立站</title>
        <meta name="description" content="了解我们的团队、使命和价值观" />
      </Head>
      
      <Layout>
        {/* 页面标题 */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              关于我们
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们是一支充满激情的团队，致力于为客户提供最优质的服务和解决方案
            </p>
          </div>
        </section>

        {/* 公司介绍 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  我们的故事
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  成立于2019年，我们从一个小团队开始，凭借对技术的热爱和对客户的承诺，
                  逐步发展成为行业内备受信赖的服务提供商。
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  我们相信技术的力量能够改变世界，也相信优质的服务能够创造价值。
                  这些年来，我们帮助了数百家企业实现数字化转型，见证了他们的成长和成功。
                </p>
                <p className="text-lg text-gray-600">
                  未来，我们将继续秉承"专业、创新、用心"的理念，
                  为更多的客户提供优质的服务，共同创造美好的未来。
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                    <div className="text-gray-600">成功项目</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                    <div className="text-gray-600">合作客户</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">5年</div>
                    <div className="text-gray-600">行业经验</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                    <div className="text-gray-600">团队成员</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 使命愿景 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h3>
                <p className="text-lg text-gray-600">
                  通过专业的技术服务和创新的解决方案，
                  帮助客户实现业务目标，创造更大的价值。
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的愿景</h3>
                <p className="text-lg text-gray-600">
                  成为行业内最受信赖的服务提供商，
                  为客户的成功贡献我们的专业力量。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心价值观 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                核心价值观
              </h2>
              <p className="text-xl text-gray-600">
                指导我们行动的核心理念
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 团队介绍 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                核心团队
              </h2>
              <p className="text-xl text-gray-600">
                认识我们的专业团队
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

