/**
 * @desc contains methods that extract relevant fields
 * from the data received the news API.
 */
class SourceProps {
/**
 * Creates an instance of SourceProps
 * @memberof SourceProps
 */
  constructor() {
    this.sources = [];
  }

  /**
   * @desc extract specific data fields from data received from the API end point.
   *
   * @param {string} index represents the short identification name for each source.
   * @param {string} id represents the news ID.
   * @param {string} name represents the name of the source
   * @param {string} description represents a short description of the news source
   * @param {string} category represents the category of the news source
   * @param {string} sortBysAvailable represents the type of news list
   * @returns {void} push the Source metadata into the empty array created
   * @memberof SourceProps
   */
  appendSourceParam(index, id, name, description, category, sortBysAvailable) {
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
   * @returns {object} object containing all news sources
   */
  get() {
    return this.sources;
  }
}
export default SourceProps;
