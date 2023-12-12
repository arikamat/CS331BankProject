import Image from 'next/image';
import Link from "next/link";

function Credo() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/img/home.jpg"
          height={720}
          width={600}
        ></Image>
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Here at D&A, We Stand With You
          </h1>
          <p class="mb-8 leading-relaxed">
            Our commitment to you is more than just transactions; it's a journey
            toward financial triumph. With a vision rooted in customer-centric
            values and a legacy built on the pillars of trust and innovation,
            we're not just a bank - but a partner in your financial success.
          </p>
          <div class="flex justify-center">
            <Link class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            href="/login" >
              Log In
            </Link>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credo;
