// Import components with different names
import BlogBox from "./blogBox";
import { Breadcomb as ImportedBreadcomb } from "./breadcomb";
import { Heading as ImportedHeading } from "./heading";
import { Disclaimer as ImportedDisclaimer } from "./footer";
import { NoIntenet as ImportedNoIntenet } from "./internetNotFound";

// Re-export with the original names
export {
  BlogBox,
  ImportedBreadcomb as Breadcomb,
  ImportedHeading as Heading,
  ImportedDisclaimer as Disclaimer,
  ImportedNoIntenet as NoIntenet,
};
