## Functions

<dl>
<dt><a href="#loadJsonFile">loadJsonFile()</a> ⇒ <code>Object</code></dt>
<dd><p>Load JSON data from a file.</p>
</dd>
<dt><a href="#filterDuplicates">filterDuplicates(dataList)</a> ⇒ <code>Array</code></dt>
<dd><p>Filter out duplicate items in an array based on the <code>key</code> property.</p>
</dd>
<dt><a href="#createCleanData">createCleanData()</a> ⇒ <code>Object</code></dt>
<dd><p>Load JSON data, filter out duplicates, and return the cleaned data.</p>
</dd>
<dt><a href="#saveCleanJson">saveCleanJson(cleanData)</a></dt>
<dd><p>Save cleaned data as a JSON file.</p>
</dd>
</dl>

<a name="loadJsonFile"></a>

## loadJsonFile() ⇒ <code>Object</code>
Load JSON data from a file.

**Kind**: global function  
**Returns**: <code>Object</code> - Parsed JSON object from the file.  
**Throws**:

- <code>Error</code> If an error occurs while reading the file or parsing the JSON.

<a name="filterDuplicates"></a>

## filterDuplicates(dataList) ⇒ <code>Array</code>
Filter out duplicate items in an array based on the `key` property.

**Kind**: global function  
**Returns**: <code>Array</code> - Array with duplicates removed.  
**Throws**:

- <code>Error</code> If an error occurs during filtering.


| Param | Type | Description |
| --- | --- | --- |
| dataList | <code>Array</code> | Array to filter. |

<a name="createCleanData"></a>

## createCleanData() ⇒ <code>Object</code>
Load JSON data, filter out duplicates, and return the cleaned data.

**Kind**: global function  
**Returns**: <code>Object</code> - Cleaned JSON data.  
**Throws**:

- <code>Error</code> If an error occurs during the cleaning process.

<a name="saveCleanJson"></a>

## saveCleanJson(cleanData)
Save cleaned data as a JSON file.

**Kind**: global function  
**Throws**:

- <code>Error</code> If an error occurs during the file writing process.


| Param | Type | Description |
| --- | --- | --- |
| cleanData | <code>Object</code> | Cleaned JSON data to write. |

