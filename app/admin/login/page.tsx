"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleLogin(e: { preventDefault: () => void }) {
    e.preventDefault()

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password })
    })

    if (res.ok) {
        
      router.push("/admin")
    } else {
      setError("Invalid password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-neutral-900 p-8 rounded-xl w-[350px]"
      >

        <h1 className="text-2xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 mb-4"
        />

        {error && (
          <p className="text-red-400 text-sm mb-3">
            {error}
          </p>
        )}

        <button
          className="w-full bg-blue-500 py-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  )
}