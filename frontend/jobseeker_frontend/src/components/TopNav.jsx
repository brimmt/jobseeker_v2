import { useState, useRef, useEffect } from "react";
import { UserRoundCog, LogOut, Settings } from "lucide-react";
import AscendNevara from "../assets/AscendNevara-cut.png";

function TopNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 h-16 bg-[var(--primary)] border-b border-[var(--border)]">

      <div className="flex h-full items-center justify-between px-6">

        <div className="flex items-center gap-3">

          <div className="text-xl font-light 300 text-white ">
            Nevara <span className="text-[var(--secondary)]">Ascend</span>
          </div>

        </div>

        <div
          className="relative"
          ref={dropdownRef}
        >

          <button
            onClick={() =>
              setIsDropdownOpen(
                !isDropdownOpen
              )
            }
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-white"
          >

            <UserRoundCog className="h-5 w-5" />
            

            <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[var(--primary)] bg-[var(--secondary)]" />

          </button>

          {isDropdownOpen && (

            <div className="absolute right-0 top-12 w-48 rounded-lg border border-[var(--border)] bg-white py-2 shadow-lg">

              <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-[var(--primary)] hover:bg-gray-50">

                <Settings className="h-4 w-4" />

                Settings

              </button>

              <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-[var(--primary)] hover:bg-gray-50">

                <LogOut className="h-4 w-4" />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}

export default TopNav;