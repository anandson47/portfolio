"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  const router = useRouter()

  async function logout() {

    await fetch("/api/admin/logout", {
      method: "POST"
    })

    router.push("/admin/login")
  }

  return (

    <div className="flex min-h-screen">

      {/* Sidebar */}
      <></>
      <aside className="w-64 bg-neutral-900 p-6 flex flex-col justify-between">

        <div>

          <h2 className="text-xl font-bold mb-8">
            Admin Panel
          </h2>

          <nav className="flex flex-col gap-4">

            <Link href="/admin">
              Dashboard
            </Link>

            <Link href="/admin/matches">
              Matches
            </Link>

            <Link href="/admin/fitness">
              Fitness
            </Link>

            <Link href="/admin/content">
              Content
            </Link>

            <Link href="/admin/projects">
              Projects
            </Link>

          </nav>

        </div>

        {/* Logout */}

        <button
          onClick={logout}
          className="mt-10 bg-red-500 py-2 rounded"
        >
          Logout
        </button>

      </aside>

      {/* Main Content */}

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>

  )

}