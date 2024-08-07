import { Metadata } from 'next';
import Image from 'next/image';
import Cta from "../../Home/Cta"

export async function generateStaticParams() {
  return blogdata.map((_, index) => ({
    id: index.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const blog = blogdata[parseInt(params.id, 10)];
  if (!blog) {
    return {
      title: "Blog not found",
    };
  }
  return {
    title: blog.title,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const blog = blogdata[parseInt(params.id, 10)];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
   <main>
     <div className='lg:w-9/12 w-11/12 mx-auto my-10'>
      <h1 className='font-bold lg:text-5xl md:text-3xl text-3xl md:text-left'>{blog.title}</h1>
      <p className='font-medium md:text-lg text-[12px] pt-8 '>{blog.desc}</p>
      <Image src={blog.img} alt={blog.title} width={1000} height={1000} className=' max-h-[65vh] w-full object-cover mx-auto rounded-2xl my-6' />
      <p className='font-semibold'>{blog.time}</p>
      <p className='font-medium  md:text-lg text-[12px] py-6'>{blog.desc2}</p>
      <p className='font-medium  md:text-lg text-[12px] py-6'>{blog.desc3}</p>
      <p className='font-medium  md:text-lg text-[12px] py-6'>{blog.conclusion}</p>
       
    </div>
    <Cta/>
   </main>
  );
}




const blogdata = [
  {
    img: "/servicesimg/services1.jpg",
    title: "What is Remote Closing & Why You Need a Remote Closer",
    desc: "Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    desc2: "One of the primary reasons to utilize a remote closer is the ability to expand your reach. By engaging with clients globally, businesses can operate across different time zones, providing a significant geographic advantage. Remote closing is also cost-efficient, reducing overheads associated with travel and meeting spaces, and enabling easy scalability of sales operations without physical constraints.A remote closer is a sales professional who specializes in closing deals remotely. These individuals possess a unique skill set tailored to the nuances of virtual communication and sales tactics. They are adept at building rapport, understanding client needs, overcoming objections, and effectively communicating value propositions—all through digital means.",
    desc3: "Moreover, remote closers bring specialized skills focused on closing sales, leading to increased productivity through streamlined digital processes. This adaptability ensures business continuity during disruptions, such as pandemics, making it a resilient approach.Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    conclusion:"In conclusion, remote closing is an innovative approach to modern sales that leverages digital technology to overcome traditional barriers and enhance efficiency. Employing a remote closer can provide your business with the flexibility, cost savings, and expertise needed to thrive in an increasingly digital marketplace.",
    time: "12 July 2024",
  },
  {
    img: "/servicesimg/services2.jpg",
    title: "Need of Construction Services Worldwide",
    desc: "Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    desc2: "One of the primary reasons to utilize a remote closer is the ability to expand your reach. By engaging with clients globally, businesses can operate across different time zones, providing a significant geographic advantage. Remote closing is also cost-efficient, reducing overheads associated with travel and meeting spaces, and enabling easy scalability of sales operations without physical constraints.A remote closer is a sales professional who specializes in closing deals remotely. These individuals possess a unique skill set tailored to the nuances of virtual communication and sales tactics. They are adept at building rapport, understanding client needs, overcoming objections, and effectively communicating value propositions—all through digital means.",
    desc3: "Moreover, remote closers bring specialized skills focused on closing sales, leading to increased productivity through streamlined digital processes. This adaptability ensures business continuity during disruptions, such as pandemics, making it a resilient approach.Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    conclusion:"In conclusion, remote closing is an innovative approach to modern sales that leverages digital technology to overcome traditional barriers and enhance efficiency. Employing a remote closer can provide your business with the flexibility, cost savings, and expertise needed to thrive in an increasingly digital marketplace.",
    time: "12 July 2024",
  },
  {
    img: "/servicesimg/services3.jpg",
    title: "Strategic Planning with Financial Management",
    desc: "Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    desc2: "One of the primary reasons to utilize a remote closer is the ability to expand your reach. By engaging with clients globally, businesses can operate across different time zones, providing a significant geographic advantage. Remote closing is also cost-efficient, reducing overheads associated with travel and meeting spaces, and enabling easy scalability of sales operations without physical constraints.A remote closer is a sales professional who specializes in closing deals remotely. These individuals possess a unique skill set tailored to the nuances of virtual communication and sales tactics. They are adept at building rapport, understanding client needs, overcoming objections, and effectively communicating value propositions—all through digital means.",
    desc3: "Moreover, remote closers bring specialized skills focused on closing sales, leading to increased productivity through streamlined digital processes. This adaptability ensures business continuity during disruptions, such as pandemics, making it a resilient approach.Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    conclusion:"In conclusion, remote closing is an innovative approach to modern sales that leverages digital technology to overcome traditional barriers and enhance efficiency. Employing a remote closer can provide your business with the flexibility, cost savings, and expertise needed to thrive in an increasingly digital marketplace.",
    time: "12 July 2024",
  },
  {
    img: "/servicesimg/services4.jpg",
    title: "Long-term strategic plan with business goals",
    desc: "Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    desc2: "One of the primary reasons to utilize a remote closer is the ability to expand your reach. By engaging with clients globally, businesses can operate across different time zones, providing a significant geographic advantage. Remote closing is also cost-efficient, reducing overheads associated with travel and meeting spaces, and enabling easy scalability of sales operations without physical constraints.A remote closer is a sales professional who specializes in closing deals remotely. These individuals possess a unique skill set tailored to the nuances of virtual communication and sales tactics. They are adept at building rapport, understanding client needs, overcoming objections, and effectively communicating value propositions—all through digital means.",
    desc3: "Moreover, remote closers bring specialized skills focused on closing sales, leading to increased productivity through streamlined digital processes. This adaptability ensures business continuity during disruptions, such as pandemics, making it a resilient approach.Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction. This approach leverages various digital communication tools such as video conferencing, phone calls, emails, and specialized software platforms to facilitate the entire sales process from negotiation to contract signing. Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    conclusion:"In conclusion, remote closing is an innovative approach to modern sales that leverages digital technology to overcome traditional barriers and enhance efficiency. Employing a remote closer can provide your business with the flexibility, cost savings, and expertise needed to thrive in an increasingly digital marketplace.",
    time: "12 July 2024",
  },
];