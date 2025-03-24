const SchemaMarkup = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nishav Group",
      "description": "Leading provider of HR management solutions",
      "url": "https://nishavgroup.in",
      "logo": "https://nishavgroup.in/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "addressCountry": "India"
      }
    };
    return (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    );
  };
  export default SchemaMarkup;