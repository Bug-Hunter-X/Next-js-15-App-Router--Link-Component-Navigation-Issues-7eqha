```javascript
import Link from 'next/link';

function MyComponent() {
  const router = useRouter(); // Import useRouter

  const handleLinkClick = (href) => {
    router.push(href, undefined, { shallow: true }); // Use router.push with shallow: true for relative navigation
  };

  return (
    <div>
      <a onClick={() => handleLinkClick('/')}>Home</a> 
      <a onClick={() => handleLinkClick('/about')}>About</a>
    </div>
  );
}

export default MyComponent;
```