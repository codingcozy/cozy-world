---
title: "how to use getStaticProps, getServersideProps in Nextjs"
description: ""
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2023-06-30T12:39:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
tag: Nextjs, SSR
category: Nextjs
---

# How to properly use getStaticProps, getServersideProps

:::tip
I'm trying to organize getStaticProps, getServerSideProps, and getStaticPaths in which situations each should be used.
:::

getStaticProps and getServersideProps can be used according to the appropriate situation according to three scenarios.

## 1. Cases where no external data is required

In the most basic case, if you do not need external data, you can compose a component without using **getStaticProps, getServerSideProps, and getStaticPaths as shown below.**

```javascript
function Test() {
  return <div>Test</div>;
}

export default Test;
```

## 2. Cases where page content depends on external data

This case is usually used on pages such as blogs.

```tsx
// The Blog component must obtain data called posts through an API request.
export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}
```

As above, **Use `getStaticProps` when you need to retrieve desired data (posts) through an API request before rendering.**

```tsx
export default function Blog({ posts }) {
  // Render posts...
}

// This function is called only once at build time.
export async function getStaticProps() {
  // Write the API request you want inside.
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // You can pass desired posts props to the Blog component through return .
  return {
    props: {
      posts,
    },
  };
}
```

## 3. When a page path depends on external data

Third, the path of the page depends on external data.
For example, if blog posts are retrieved through an API request and the path needs to be determined by the corresponding blog post id, use `getStaticPaths` as shown below.

```tsx
// This function is called when the page is built.
export async function getStaticPaths() {
  // Call external API inside.
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // Create paths through received posts.
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // You can determine the paths value by giving paths as a return value.
  // { fallback: false } means that the rest of the paths not included in the paths value will be treated as 404.
  return { paths, fallback: false };
}
```

And you can use `getStaticPaths` and `getStaticProps` in the same component as shown below.

```tsx
export default function Post({ post }) {
  // Render post...
}

export async function getStaticPaths() {
  // ...
}

export async function getStaticProps({ params }) {
  // Because params includes the post's id, you can request post information as follows.
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  // Download post information through props.
  return { props: { post } };
}
```

The above scenarios can be usefully used in the following pages.

- Marketing and landing PR pages
- Pages containing articles, such as blog pages and Docs pages
- E-commerce market product pages

## getServerSideProps

In the case of server-side rendering, unlike static generation, html is created for every request.

```tsx
export default function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
```

Usage is the same as the existing Static functions as above.
The difference is below.

:::tip
static : called only once at build time <br />
server-side : Called whenever a request is made.
:::

Because of the above difference, you should use it according to your situation.
It is efficient to use `getServerSideProps` for pages where data updates occur frequently, and as mentioned above, to use `getStaticProps` for pages where data changes infrequently, such as documents, blogs, and product pages.

The official documentation of Nextjs 13.x recommends Static Generation, and the reason is that Static Generation is high in terms of performance. Depending on the need, it seems that the developer needs to choose whether to use `getServerSideProps` or not.
