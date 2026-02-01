import { useState } from "react";

import { ChevronRight } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "../elements/theme-toggle";
import { Button } from "../ui/button";

const Navbar = ({ currentPage = "/" }: { currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = currentPage;

  const navLinks = [
    {
      label: "Services",
      href: "#services",
      dropdownItems: [
        {
          title: "Web Applications",
          href: "/#services",
          description: "Full-stack web apps with modern frameworks",
        },
        {
          title: "Mobile Apps",
          href: "/#services",
          description: "iOS and Android apps that feel native",
        },
        {
          title: "Automations",
          href: "/#services",
          description: "Custom integrations and workflow automation",
        },
        {
          title: "Our Process",
          href: "/#accelerate-planning",
          description: "From discovery to launch in 4 simple steps",
        },
      ],
    },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-50 border-b backdrop-blur-sm">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <img
              src="/images/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="leading-0 text-2xl font-semibold">LaunchFast</span>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden items-center gap-8 lg:flex">
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className="text-primary lg:text-base">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4">
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex select-none items-center gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                              >
                                <div>
                                  <div className="text-sm font-medium leading-none">
                                    {item.title}
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-primary lg:text-base",
                        pathname === link.href && "text-muted-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2.5">
            <div
              className={`transition-opacity duration-300 ${isMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
            >
              <ThemeToggle />
            </div>
            <a
              href="/contact"
              className={`hidden transition-opacity duration-300 sm:block ${isMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
            >
              <Button className="gap-1">
                Book a call
                <ChevronRight className="size-4" />
              </Button>
            </a>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="text-muted-foreground relative flex h-8 w-8 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full transform rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full transform rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full transform rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`bg-background container fixed inset-0 top-full flex h-[calc(100vh-64px)] flex-col transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="mt-8 space-y-2">
          <a
            href="/contact"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button size="sm" className="w-full">
              Book a call
            </Button>
          </a>
        </div>
        <nav className="mt-3 flex flex-1 flex-col gap-6">
          {navLinks.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="text-primary flex w-full items-center justify-between text-lg font-medium tracking-[-0.36px]"
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === link.label ? "rotate-90" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "ml-4 space-y-3 overflow-hidden transition-all",
                    openDropdown === link.label
                      ? "mt-3 max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  {link.dropdownItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="hover:bg-accent flex items-start gap-3 rounded-md p-2"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      <div>
                        <div className="text-primary font-medium">
                          {item.title}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-primary text-lg tracking-[-0.36px]",
                  pathname === link.href && "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
