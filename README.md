# Star Rating Component

This `StarRating` component is a fully customizable React component that allows users to rate items using a star-based system. It supports dynamic customization of colors, size, tooltips, and accessibility.

## Installation

To use this component, copy the `StarRating` code into your project or install it from your own library if published.

## Usage

Here is an example of how to use the `StarRating` component in your project.

### Basic Example

```tsx
import React from 'react';
import { StarRating } from './StarRating';

const App: React.FC = () => {
  const handleRatingChange = (rating: number) => {
    console.log('Selected Rating:', rating);
  };

  return (
    <div>
      <h1>Star Rating Example</h1>
      <StarRating onChange={handleRatingChange} />
    </div>
  );
};

export default App;
```

### Customization Example

```tsx
import React from 'react';
import { StarRating } from './StarRating';

const App: React.FC = () => {
  const handleRatingChange = (rating: number) => {
    console.log('Selected Rating:', rating);
  };

  return (
    <div>
      <h1>Custom Star Rating</h1>
      <StarRating
        totalStars={10} // Display 10 stars
        initialRating={3} // Initial rating set to 3 stars
        activeColor="gold" // Selected stars color
        inactiveColor="lightgray" // Unselected stars color
        size="3rem" // Size of the stars
        gap="10px" // Gap between stars
        onChange={handleRatingChange} // Callback function on rating change
        tooltipTexts={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']} // Custom tooltips
        ariaLabel="Custom star rating" // Accessible label
      />
    </div>
  );
};

export default App;
```

## Props

| Prop Name      | Type                     | Default         | Description                                                                 |
|----------------|--------------------------|-----------------|-----------------------------------------------------------------------------|
| `totalStars`   | `number`                 | `5`             | Total number of stars to display.                                          |
| `initialRating`| `number`                 | `0`             | Initial selected rating.                                                   |
| `onChange`     | `(rating: number) => void` | `undefined`    | Callback function triggered when the rating changes.                       |
| `activeColor`  | `string`                 | `yellow`        | Color for selected stars.                                                  |
| `inactiveColor`| `string`                 | `gray`          | Color for unselected stars.                                                |
| `size`         | `string` or `number`     | `2rem`          | Font size of the stars.                                                    |
| `gap`          | `string` or `number`     | `5px`           | Space between stars.                                                       |
| `className`    | `string`                 | `''`            | Custom class name for additional styling.                                  |
| `tooltipTexts` | `string[]`               | Auto-generated  | Array of tooltips for each star. Defaults to "1 Star", "2 Stars", etc.   |
| `ariaLabel`    | `string`                 | `Star rating`   | Accessible label for the star rating component.                            |

## Features

- **Customizable Colors**: Adjust the colors of selected and unselected stars.
- **Dynamic Star Count**: Define the number of stars to display.
- **Tooltips**: Provide helpful tooltips for each star.
- **Accessibility**: Includes ARIA attributes for screen readers.
- **Smooth Transitions**: Color changes are animated for a better user experience.

## Styling

You can style the component further using the `className` prop or modify the inline styles directly in the component code.

### Example CSS

```css
.star-rating-container {
  display: flex;
  gap: 5px;
}

.star-button {
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}
```

## License

This component is open-source and can be freely used and modified.

---

Enjoy building with the `StarRating` component! If you encounter any issues or have suggestions for improvements, feel free to reach out.

