import Image from "next/image";

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/+919136136364"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 -right-40 flex items-center transition-all"
        >
            <div className="relative">
                <div className="absolute inset-0 rounded-full animate-ping bg-green-600 opacity-60"></div>
                <Image
                    src="/about/whatsapp.png"
                    alt="WhatsApp"
                    width={45}
                    height={45}
                    className="rounded-full relative z-10"
                />

            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-medium text-gray-700 px-4 py-2 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out whitespace-nowrap">
                    Chat with us on WhatsApp
                </p>
            </div>
        </a>
    );
};

export default FloatingWhatsApp;