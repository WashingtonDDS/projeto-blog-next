export function Header() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">CubosFin - Blog</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
              Artigos sobre Finanças
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}