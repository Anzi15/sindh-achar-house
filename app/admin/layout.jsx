"use client";
import Link from "next/link";
import AdminSidebar from "../components/ui/AdminSidebar"; // Adjust path as necessary
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"; // Keep using this if it works
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase/firbaseConfig"; // Adjust path as necessary
import { collection } from "firebase/firestore";
import { auth } from "../lib/firebase/firbaseConfig";// Adjust path as necessary
import AdminDropdownMenu from "../components/ui/admin/AdminDropdownMenu.jsx"; // Adjust path as necessary
import { toast } from "react-toastify"; // Ensure this is installed and working
import { usePathname } from "next/navigation";

const AdminLayout = ({children}) => {
    const pathname = usePathname();
  const dontRestrict = pathname === '/admin/login' || pathname == "/admin/signup"
  const [sideBarExpanded, setSideBarExpanded] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [Adminvalue, AdminLoading] = useCollection(collection(db, "Admins"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (user && Adminvalue) {
      const isAdmin = Adminvalue.docs.some((doc) => doc.data().email === user.email);
      setUserIsAdmin(isAdmin);
      if (!isAdmin) {
        toast.error("You do not have admin access.");
      }
    }
  }, [user, Adminvalue]);

  if (loading || AdminLoading) return <div>Loading...</div>;

  return (
    <>
    {loading || AdminLoading ? (
      <p>Loading..</p>
    ) : userIsAdmin ? (
      <>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  onClick={() => {
                    setSideBarExpanded(!sideBarExpanded);
                  }}
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <Link href="/admin" className="flex ms-2 md:me-24">
                  {/* <img src={adminIcon} className="h-8 me-3" alt="Admin" /> */}
                  <span className="self-center text-xl  sm:text-2xl whitespace-nowrap dark:text-white">
                    Admin Panel
                  </span>
                </Link>
              </div>
              <AdminDropdownMenu
                userImg={user.photoURL}
                name={user.displayName}
                email={user.email}
                signOutFun={() => {
                  handleSignout();
                }}
              />
            </div>
          </div>
        </nav>

        <main className="flex pt=6 overflowa">
          <AdminSidebar expanded={sideBarExpanded} className="" />

          <div
            className={`p-4 mt-[3rem] md:w-[80vw] w-[100vw] flex justify-center items-center md:bg-white ${
              sideBarExpanded && "bg-gray-300"
            }`}
          >
            {children}
          </div>
        </main>
      </>
    ) : (
        !dontRestrict ?
      <>
        <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
          <h1 className="text-3xl">Please Log in to continue</h1>
          {/* <img
            src={eyeGif}
            alt="ghostIllustration"
            className="h-[20rem] my-4 select-none"
            draggable={false}
          /> */}
          <Link
            href="/admin/login"
            className="blue-outline-hover-animation-btn bg-black flex text-white text-nowrap p-3"
          >
            Log In
            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </> : (
        <>
        {children}
        </>
      )
    )}
  </>
  );
};

export default AdminLayout;
