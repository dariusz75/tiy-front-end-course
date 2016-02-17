###`<strong>`
The `<strong>` tag is a phrase tag. It defines important text.

It is often confusing to new developers why there are so many ways to express the same thing on a rendered website. Bold and Strong are perhaps one of the most common. Why use `<strong></strong>` vs `<b></b>`? You have to type a whole lot more with strong and it produces the exact same result, right?

Perhaps not; strong is a logical state, and bold is a physical state. Logical states separate presentation from the content, and by doing so allow for it to be expressed in many different ways. Perhaps instead of rendering some text as bold you want to render it red, or a different size, or underlined, or whatever. It makes more sense to change the presentational properties of strong than it does bold. This is because bold is a physical state; there is no separation of presentation and content, and making bold do anything other than bold text would be confusing and illogical.

Exapmle - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_strong_default_css


###`<em>`
The `<em>` tag is a phrase tag. It renders as emphasized text.
Typically this element is displayed in italic type. However, it should not be used simply to apply italic styling; use the CSS styling for that purpose.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_phrase_test


###`<blockquote>`
The `<blockquote>` tag (or Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation 

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_blockquote_test


###`<q>`
The HTML Quote Element (`<q>`) indicates that the enclosed text is a short inline quotation. 
Browsers normally insert quotation marks around the quotation.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_q


###`<abbr>`
The HTML `<abbr>` element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_abbr_test


###'<cite>'
The HTML Citation Element (`<cite>`) represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_cite


###`<dfn>`
The HTML Definition Element (`<dfn>`) represents the defining instance of a term.
The `<dfn>` element marks the term being defined; the definition of the term should be given by the surrounding `<p>, <section>` or definition list group (usually a `<dt>, <dd>` pair).

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_dfn


###`<address>`
The HTML `<address>` element supplies contact information for its nearest `<article>` or `<body>` ancestor; in the latter case, it applies to the whole document.
* To represent an arbitrary address, one that is not related to the contact information, use a `<p>` element rather than the `<address>` element.
* This element should not contain more information than the contact information, like a publication date (which belongs in a `<time>` element).
* Typically an `<address>` element can be placed inside the `<footer>` element of the current section, if any.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_address


###`<ins>`
The `<ins>` tag defines a text that has been inserted into a document.
Browsers will underline inserted text.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_del


###`<del>`
The `<del>` tag defines text that has been deleted from a document.
Browsers will normally strike a line through deleted text.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_del


###'<s>'
The `<s>` tag specifies text that is no longer correct, accurate or relevant.
The `<s>` tag should not be used to define replaced or deleted text, use the `<del>` tag to define replaced or deleted text.

Example - http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_s

