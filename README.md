# برازنده تن — نسخه استاتیک دقیق UI (برای GitHub Pages)

این پوشه، نسخه‌ی **استاتیک** و **بدون بک‌اند** از خودِ کدهای واقعی سایت شماست — همان تمپلیت‌ها، همان CSS/JS اصلی، همان هدر/فوتر/منوی پایین، فقط با داده‌های نمونه (فیک) به‌جای دیتابیس واقعی. پنل ادمین در این نسخه وجود ندارد.

## نحوه ساخت این نسخه
تمپلیت‌های اصلی Django شما (`base.html`, `core/home.html`, `products/list.html` و `detail.html`, `accounts/profile.html`, `blog/list.html` و `detail.html`, و غیره) با موتور Jinja2 و داده‌های نمونه رندر شدند تا خروجی HTML نهایی، دقیقاً همان مارک‌آپ و استایل سایت واقعی شما را داشته باشد.

## صفحات موجود
- `index.html` — صفحه اصلی
- `products.html` — لیست محصولات (۲۰ محصول در ۵ دسته‌بندی واقعی سایت)
- `product-1.html` تا `product-20.html` — صفحه اختصاصی هر محصول
- `blog.html` — لیست مقالات
- `blog-size-guide.html`, `blog-loungewear-care.html` — ۲ مقاله تستی کامل
- `profile.html` — پروفایل کاربر نمونه (سفارش‌ها، آدرس‌ها، تیکت‌ها، اعلان‌ها)
- `cart.html`, `about.html`, `contact.html`, `faq.html`, `terms.html`, `login.html`

## نکات مهم
- چون این نسخه بک‌اند واقعی ندارد، اکشن‌هایی مثل «افزودن به سبد خرید»، «ثبت نظر»، «پرداخت» و... درخواست شبکه می‌فرستند ولی چون سرور واقعی پشت‌شان نیست، پاسخ موفق نمی‌گیرند (رفتار خودِ سایت در حالت قطع اتصال به سرور).
- عکس محصولات/بنرها/مقالات چون فایل واقعی در پروژه موجود نبود (آپلودی هستند)، با تصاویر SVG نمونه جایگزین شدند. برای نسخه‌ی نهایی، این فایل‌ها را در `assets/images/` با عکس واقعی جایگزین کنید.
- داده‌های نمونه (محصولات، مقالات، پروفایل) در `build/dataset.py` (فایل‌های ساخت، جدا از خروجی) تعریف شده‌اند؛ خودِ فایل‌های HTML خروجی نهایی و ایستا هستند.

## آپلود روی GitHub Pages
```bash
git init
git add .
git commit -m "Static UI showcase"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
سپس در گیت‌هاب: Settings > Pages > Source: `Deploy from a branch` > Branch: `main` > Folder: `/ (root)` > Save.

آدرس نهایی: `https://USERNAME.github.io/REPO/`
