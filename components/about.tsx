import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
              <Image src="/placeholder.svg?height=400&width=400" alt="Ảnh chân dung" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Giới thiệu</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Xin chào! Tôi là Nguyễn Văn A, một Front-End Developer với hơn 3 năm kinh nghiệm trong việc xây dựng và
              thiết kế các ứng dụng web hiện đại.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Tôi đam mê tạo ra những trải nghiệm người dùng tuyệt vời và có khả năng chuyển đổi thiết kế thành code một
              cách chính xác và hiệu quả. Tôi luôn cập nhật các công nghệ mới nhất và áp dụng các phương pháp tốt nhất
              trong phát triển web.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Ngoài công việc, tôi thích đọc sách về công nghệ, tham gia các cộng đồng lập trình và đóng góp cho các dự
              án mã nguồn mở.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
