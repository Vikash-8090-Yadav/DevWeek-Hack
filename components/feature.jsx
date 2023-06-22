import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from "next/image";
import BlockChain from "../public/images/hero.png";
import Banner from "../public/images/Banner.png";
const features = [
  {
    name: 'Registration and Onboarding:',
    description:
      'Cloth manufacturers and local shops can sign up for SustainableStitch by creating their accounts. They provide relevant information about their business, including contact details and product categories.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Product Showcase:',
    description: 'Cloth manufacturers can create captivating product listings, including detailed descriptions, high-quality images, and pricing information. They can showcase their unique offerings to attract potential buyers.',
    icon: LockClosedIcon,
  },
  {
    name: 'Search and Discovery:',
    description: 'Local shops can explore the SustainableStitch platform and discover a wide range of products offered by cloth manufacturers. They can browse through different categories, apply filters, and find products that align with their store style and target audience.',
    icon: ServerIcon,
  },
  {
    name: 'Secure Blockchain Transactions:',
    description: 'SustainableStitch leverages the CELO blockchain to ensure secure and tamper-proof transactions. Manufacturers and local shops can execute transactions for product purchases, with the assurance of a trusted and decentralized environment.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image src = {Banner} height="1440" width="2160" className = "" />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
