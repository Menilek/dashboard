import { React } from "react";
import { Badge } from "reactstrap";

const CategoryBadge = (category) => {
  const wordCategories = {
    Noun: "primary",
    Verb: "secondary",
    Adverb: "success",
    Adjective: "primary",
    Preposition: "warning",
    Phrase: "dark",
    Conjunction: "light",
    Pronoun: "info",
    Slang: "dark",
    Unknown: "danger",
  };

  const mapCategoryToColour = (category) => {
    return wordCategories[category.category];
  };

  const badgeColour = mapCategoryToColour(category);

  return (
    <Badge color={badgeColour} pill>
      {category.category.toUpperCase()}
    </Badge>
  );
};

export default CategoryBadge;
