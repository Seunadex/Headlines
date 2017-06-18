/**
 * @desc contains methods that extract relevant fields
 * from the data received the news API.
 */
class SourceProperties {
  /**
   * Creates an instance of SourceProperties with a sources property.
   *
   */
  constructor() {
    this.sources = [];
  }

  /**
   * @desc extract specific data fields from data received from the API end point.
   * @param index  represents the name of the news source.
   *  Useful when iterating through the array of news sources.
   * @param id represents the name of the news source.
   * @param name represents the full name of the news source.
   * @param description represents a brief description of the news source.
   * @param category represents the category of news primarily covered by the news source.
   * @param sortBysAvailable represents the sort options available on this news source.
   *
   * @memberof SourceProperties
   */
  add(index, id, name, description, category, sortBysAvailable) {
    this.sources.push({
      href: `/articles/${id}`,
      id: index,
      header: name,
      description,
      category,
      title: name,
      sortBysAvailable,
    });
  }

  /**
   * @desc returns the value of the sources property everytime it is called.
   * @returns {object} array containing all news sources
   */
  get() {
    return this.sources;
  }

}
export default SourceProperties;
