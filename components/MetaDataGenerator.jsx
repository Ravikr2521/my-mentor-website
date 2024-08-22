
export async function generateMetadata_({ApiUrl}) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${ApiUrl}`)
      .then((res) => res.json());
  
    const tags = result?.data?.attributes?.seo;
  

   
    return {
      title: tags?.title,
      description: tags?.description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${tags?.siteName || ""}`,
      },
      keyword: tags?.keyword,
      ogTitle: tags?.ogTitle,
      ogType: tags?.ogType,
      ogDescription: tags?.description,
      ogUrl: tags?.ogUrl,
      twitterCard: tags?.twitterCard,
      twitterTitle: tags?.twitterTitle,
      twitterType: tags?.twitterType,
      twitterDescription: tags?.twitterDescription,
      twitterUrl: tags?.twitterUrl,
      ogLocal: tags?.ogLocal,
      twitterLocal: tags?.twitterLocal,
      siteName: tags?.siteName,
      ogImgUrl: tags?.ogImgUrl,
      LinkedInTitle: tags?.LinkedInTitle,
      LinkedInImageUrl: tags?.LinkedInImageUrl,
      LinkedinDescription: tags?.LinkedinDescription,
    
    };
  }
