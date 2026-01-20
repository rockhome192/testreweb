export default function LoginForm() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    เข้าสู่ระบบ
                </h1>

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="อีเมล"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="password"
                        placeholder="รหัสผ่าน"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <button
                        type="submit"
                        className="btn-primary w-full"
                    >
                        เข้าสู่ระบบ
                    </button>
                </form>
            </div>
        </div>
    )
}
