function Footer() {
    const contacts = [
        {
            name: "TikTok",
            value: "@yourtiktok",
            href: "https://www.tiktok.com/",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M19.589 7.09a5.42 5.42 0 0 1-3.168-1.022A5.43 5.43 0 0 1 14.99 3h-3.57v12.21a2.86 2.86 0 1 1-2.86-2.86c.3 0 .59.05.86.13V8.85a6.4 6.4 0 0 0-.86-.06A6.43 6.43 0 1 0 15 15.21V9.01a8.94 8.94 0 0 0 4.59 1.27V7.09Z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            value: "Your Facebook",
            href: "https://www.facebook.com/",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M24 12.07C24 5.43 18.63 0 12 0S0 5.43 0 12.07C0 18.1 4.39 23.13 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.04 1.79-4.72 4.55-4.72 1.32 0 2.7.24 2.7.24v3h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.49h-2.81V24C19.61 23.13 24 18.1 24 12.07Z" />
                </svg>
            ),
        },
        {
            name: "Phone",
            value: "+855 XX XXX XXX",
            href: "tel:+855XXXXXXXX",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                    <path
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
                    />
                </svg>
            ),
        },
        {
            name: "Telegram",
            value: "@yourtelegram",
            href: "https://t.me/yourtelegram",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M21.9 3.2 18.6 20c-.25 1.19-.92 1.48-1.87.92l-5.15-3.8-2.49 2.4c-.28.28-.52.52-1.07.52l.38-5.3 9.66-8.73c.42-.38-.09-.59-.65-.21L5.47 13.25.36 11.65c-1.11-.35-1.13-1.11.23-1.64L20.55 2.3c.93-.35 1.74.21 1.35.9Z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="border-t border-white/10">

            {/* Cambodia */}
            <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">

                    <div>
                        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                            CAMBODIA
                            <div className="h-2" />
                            <span className="text-zinc-500">
                                made.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Find us. Everywhere in your pocket, Cambodia.
                        </p>
                    </div>

                </div>
            </div>

            {/* Contact */}
            <div className=" border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">

                        {contacts.map((contact) => (
                            <a
                                key={contact.name}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-black p-6 transition-all duration-500 hover:bg-white hover:text-black md:p-8"
                            >

                                <div className="mb-10 flex items-center justify-between">

                                    {/* Icon */}
                                    <div className="flex h-10 w-10 items-center justify-center border border-white/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-black">
                                        {contact.icon}
                                    </div>

                                    {/* Arrow */}
                                    <span className="text-xs text-zinc-600 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black">
                                        ↗
                                    </span>

                                </div>

                                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                    {contact.name}
                                </p>

                                <p className="truncate text-sm font-medium">
                                    {contact.value}
                                </p>

                            </a>
                        ))}

                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;