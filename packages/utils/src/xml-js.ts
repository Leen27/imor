export const useXmlParser = async (configs: any = {}) => {
    const XMLParser = (await import('./fxparser.min.js')).default

    if (!XMLParser) throw new Error('无法创建 xml 解析器')
     
    // https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/docs/v4/2.XMLparseOptions.md
    const options = {
        ignoreAttributes: false,
        ignoreDeclaration: true,
        allowBooleanAttributes: true,
        parseAttributeValue: true,
        parseTagValue: true,
        preserveOrder: false,
        removeNSPrefix: false,
        attributeNamePrefix : '',
        attributesGroupName: '$',
        ...configs
    };

    const parser = new XMLParser(options);

    return {
        parser
    } as {
        parser: {
            parse: (xml: string) => Record<string, any>
        }
    }
}
