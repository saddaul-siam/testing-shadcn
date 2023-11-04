import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const NavbarService = () => {
  const [language, setLanguage] = useState("english");
  const [currency, setCurrency] = useState("bdt");
  return (
    <div className="hidden h-10 border-b sm:block">
      <div className="container flex h-full items-center justify-between text-sm text-gray-600 dark:text-primary-foreground">
        <div>
          <ul className="flex gap-5 ">
            <li>About Us</li>
            <li>Order Tracking</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="space-x-2">
          {/* Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {language === "english" ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-us"
                      viewBox="0 0 640 480"
                    >
                      <path fill="#bd3d44" d="M0 0h640v480H0" />
                      <path
                        stroke="#fff"
                        stroke-width="37"
                        d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                      />
                      <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                      <marker id="us-a" markerHeight="30" markerWidth="30">
                        <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
                      </marker>
                      <path
                        fill="none"
                        marker-mid="url(#us-a)"
                        d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
                      />
                    </svg>
                    <span>English</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-bd"
                      viewBox="0 0 640 480"
                    >
                      <path fill="#006a4e" d="M0 0h640v480H0z" />
                      <circle cx="280" cy="240" r="160" fill="#f42a41" />
                    </svg>
                    <span>Bangla</span>
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("bangla")}>
                <svg
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  id="flag-icons-bd"
                  viewBox="0 0 640 480"
                >
                  <path fill="#006a4e" d="M0 0h640v480H0z" />
                  <circle cx="280" cy="240" r="160" fill="#f42a41" />
                </svg>
                <span>Bangla</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("english")}>
                <svg
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  id="flag-icons-us"
                  viewBox="0 0 640 480"
                >
                  <path fill="#bd3d44" d="M0 0h640v480H0" />
                  <path
                    stroke="#fff"
                    stroke-width="37"
                    d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                  />
                  <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                  <marker id="us-a" markerHeight="30" markerWidth="30">
                    <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
                  </marker>
                  <path
                    fill="none"
                    marker-mid="url(#us-a)"
                    d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
                  />
                </svg>
                <span>English</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Currency */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {currency === "usd" ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-us"
                      viewBox="0 0 640 480"
                    >
                      <path fill="#bd3d44" d="M0 0h640v480H0" />
                      <path
                        stroke="#fff"
                        stroke-width="37"
                        d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                      />
                      <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                      <marker id="us-a" markerHeight="30" markerWidth="30">
                        <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
                      </marker>
                      <path
                        fill="none"
                        marker-mid="url(#us-a)"
                        d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
                      />
                    </svg>
                    <span>USD</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-bd"
                      viewBox="0 0 640 480"
                    >
                      <path fill="#006a4e" d="M0 0h640v480H0z" />
                      <circle cx="280" cy="240" r="160" fill="#f42a41" />
                    </svg>
                    <span>BDT</span>
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCurrency("bdt")}>
                <svg
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  id="flag-icons-bd"
                  viewBox="0 0 640 480"
                >
                  <path fill="#006a4e" d="M0 0h640v480H0z" />
                  <circle cx="280" cy="240" r="160" fill="#f42a41" />
                </svg>
                <span>BDT</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrency("usd")}>
                <svg
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  id="flag-icons-us"
                  viewBox="0 0 640 480"
                >
                  <path fill="#bd3d44" d="M0 0h640v480H0" />
                  <path
                    stroke="#fff"
                    stroke-width="37"
                    d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                  />
                  <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                  <marker id="us-a" markerHeight="30" markerWidth="30">
                    <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
                  </marker>
                  <path
                    fill="none"
                    marker-mid="url(#us-a)"
                    d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
                  />
                </svg>
                <span>USD</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavbarService;
