import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mb-4 ">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col gap-10 ">
        <div className="flex flex-col items-start justify-center gap-[5%] md:flex-row">

          {/* The logo */}
          <Link href="/" className="mb-5 ">
            <Image src="/assets/hilink-logo.svg" alt="logo" width={74} height={29}/>
            <p> Add some tagline to the logo </p>
          </Link>
          {/* The end of logo  */}

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'> 
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-50">
                  {columns.links.map((link, index) => (
                    <Link href="/" key={index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-90">
                  {SOCIALS.links.map((link, index) => (
                    <Link href="/" key={index} >
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
}



export default Footer