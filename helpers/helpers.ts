export function mergeStrings(...strings: string[]): string {
    return [...new Set(strings.join(' ').split(' '))].join(' ');

}

export function mergeClasses(...classLists: string[]): string {
    const classes = classLists
      .map(classList => classList.split(' '))
      .flat()
      .map(className => className.trim())
      .filter(className => className !== '');
      const mergedString = mergeStrings(...classes);
      
      const res = mergedString.split('').join('').replace(/(\w+)(\s\1)+/g, '$1');
      console.log({classes, mergedString, res});
      return res;
    }
  


  console.log({res: mergeStrings('class1 class2', 'class2 class3')});
  

