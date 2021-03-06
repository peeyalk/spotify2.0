import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

function login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <div className="mb-1">
        <Image
          width={200}
          height={200}
          src="https://links.papareact.com/9xl"
          alt=""
        />
      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="rounded-full bg-[#18D860] p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
