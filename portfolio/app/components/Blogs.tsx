import Image from "next/image";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

import SectionHeader from "@/components/SectionComponent";
import { BlogPost } from "@/types/";

async function getBlogPosts(): Promise<BlogPost[]> {
  const timestamp = new Date().getTime();
  const res = await fetch(
    `https://dev.to/api/articles?username=benono&t=${timestamp}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }
  return res.json();
}

export default async function Blogs() {
  const posts = await getBlogPosts();
  return (
    <section className="projects py-20 bg-white text-primary" id="blogs">
      <SectionHeader title="Blogs" />
      <div className="w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {posts.map((post) => (
          <article
            key={post.id}
            className="project border-2 bg-white border-gray-300 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="h-40 overflow-hidden">
              {post.cover_image ? (
                <Image
                  className="w-full h-[160px] rounded-t-3xl object-cover"
                  src={post.cover_image}
                  alt={post.title}
                  width={220}
                  height={150}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              ) : (
                <div className="w-[220px] h-40 bg-primary rounded-t-3xl flex justify-center items-center">
                  <ImageNotSupportedIcon className="text-gray-400 text-xl w-14 h-14" />
                </div>
              )}
            </div>
            <h3 className="border-t-2 border-gray-300 p-4 pb-0 text-accent text-2xl font-semibold">
              {post.title}
            </h3>
            <p className="p-4 pt-0 text-primary-800 text-md">
              Posted&nbsp;:&nbsp;
              {new Date(post.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <div className="w-full flex justify-center">
              <p className="p-4 text-primary w-[300px] min-h-32">
                {post.description}
              </p>
            </div>
            <div className="flex justify-between bg-primary text-white rounded-b-3xl">
              <a
                href={post.url}
                target="_blank"
                className="w-full pr-2 hover:bg-accent hover:text-primary transition-all duration-300 rounded-b-3xl"
              >
                <button className="p-2 text-bold rounded-lg w-full">
                  View Post
                </button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
