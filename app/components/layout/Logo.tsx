import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold">C</span>
      </div>
      <div>
        <span className="text-2xl font-bold text-blue-600">Cocab</span>
        <span className="text-sm text-gray-500 block">Solutions</span>
      </div>
    </Link>
  );
};

export default Logo; 