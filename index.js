class Gunpowder {
    constructor(hex) {
        this.hex = hex;
        
        this.r = ['value', 'function'];
        this.one = 'mark'; // 0270FF
        this.two = 'scholasticism'; // 7E0AFF
        this.g = ['value', 'behavior'];
        this.one = 'expression'; // 0340FF
        this.two = 'reason'; // 4C0AFF
        this.b = ['factory', 'value'];
        this.one = 'concept'; // 9060FF
        this.two = 'behavior'; // 630AFF
        
        this.r = ['number', 'assembly'];
        this.one = 'mark'; // BA70FF
        this.two = 'expression'; // 740AFF
        
        this.r = ['result', 'proof'];
        this.g = ['result', 'proof'];
        this.b = ['result', 'proof'];
        this.one = 'result'; 1510FF
        this.two = 'expression'; 140AFF
        
        this.r = ['value', 'value'];
        this.g = ['value', 'value'];
        this.b = ['value', 'value'];
        this.one = 'value'; 0000FF;
        this.two = 'value'; 000AFF;
        
        // this['result'].call(this);
    }
    
    value(n) {
        switch(n) {
            case 'value': return 'value';
            break;
                
            case 'result': return 'value';
            break;
                
            case 'function': return 'mark';
            break;
                
            case 'behavior': return 'expression';
            break;
                
            case 'expression': return 'reason';
            break;
                
            case 'proof': return 'concept';
            break;
                
            case 'concept': return 'proof';
            break;
                
            case 'mark': return 'scholasticism';
            break;
                
            case 'brand': return 'brand';
            break;
                
            case 'factory': return 'opportunity';
            break;
                
            case 'assembly': return 'reason';
            break;
                
            case 'number': return 'number';
            break;
                
            case 'reason': return 'concept';
            break;
                
            case 'opportunity': return 'function';
            break;
                
            case 'scholasticism': return 'value';
            break;
        }
    }
    
    result(n) {
        switch(n) {
            case 'value': return 'brand';
            break;
                
            case 'result': return 'expression';
            break;
                
            case 'function': return 'concept';
            break;
                
            case 'behavior': return 'mark';
            break;
                
            case 'expression': return 'proof';
            break;
                
            case 'proof': return 'result';
            break;
                
            case 'concept': return 'assembly';
            break;
                
            case 'mark': return 'result';
            break;
                
            case 'brand': return 'expression';
            break;
                
            case 'factory': return 'factory';
            break;
                
            case 'assembly': return 'scholasticism';
            break;
                
            case 'number': return 'concept';
            break;
                
            case 'reason': return 'result';
            break;
                
            case 'opportunity': return 'assembly';
            break;
                
            case 'scholasticism': return 'mark';
            break;
        }
    }
    
    function(n) {
        switch(n) {
            case 'value': return 'function';
            break;
                
            case 'result': return 'expression';
            break;
                
            case 'function': return 'behavior';
            break;
                
            case 'behavior': return 'opportunity';
            break;
                
            case 'expression': return 'proof';
            break;
                
            case 'proof': return 'factory';
            break;
                
            case 'concept': return 'assembly';
            break;
                
            case 'mark': return 'result';
            break;
                
            case 'brand': return 'opportunity';
            break;
                
            case 'factory': return 'concept';
            break;
                
            case 'assembly': return 'value';
            break;
                
            case 'number': return 'scholasticism';
            break;
                
            case 'reason': return 'concept';
            break;
                
            case 'opportunity': return 'brand';
            break;
                
            case 'scholasticism': return 'expression';
            break;
        }
    }
    
    behavior(n) {
        switch(n) {
            case 'value': return 'behavior';
            break;
                
            case 'result': return 'value';
            break;
                
            case 'function': return 'number';
            break;
                
            case 'behavior': return 'reason';
            break;
                
            case 'expression': return 'brand';
            break;
                
            case 'proof': return 'scholasticism';
            break;
                
            case 'concept': return 'proof';
            break;
                
            case 'mark': return 'result';
            break;
                
            case 'brand': return 'brand';
            break;
                
            case 'factory': return 'result';
            break;
                
            case 'assembly': return 'number';
            break;
                
            case 'number': return 'value';
            break;
                
            case 'reason': return 'expression';
            break;
                
            case 'opportunity': return 'brand';
            break;
                
            case 'scholasticism': return 'assembly';
            break;
        }
    }
    
    expression(n) {
        switch(n) {
            case 'value': return 'concept';
            break;
                
            case 'result': return 'behavior';
            break;
                
            case 'function': return 'value';
            break;
                
            case 'behavior': return 'assembly';
            break;
                
            case 'expression': return 'factory';
            break;
                
            case 'proof': return 'number';
            break;
                
            case 'concept': return 'opportunity';
            break;
                
            case 'mark': return 'value';
            break;
                
            case 'brand': return 'assembly';
            break;
                
            case 'factory': return 'scholasticism';
            break;
                
            case 'assembly': return 'mark';
            break;
                
            case 'number': return 'factory';
            break;
                
            case 'reason': return 'behavior';
            break;
                
            case 'opportunity': return 'value';
            break;
                
            case 'scholasticism': return 'factory';
            break;
        }
    }
    
    proof(n) {
        switch(n) {
            case 'value': return 'assembly';
            break;
                
            case 'result': return 'scholasticism';
            break;
                
            case 'function': return 'factory';
            break;
                
            case 'behavior': return 'value';
            break;
                
            case 'expression': return 'expression';
            break;
                
            case 'proof': return 'proof';
            break;
                
            case 'concept': return 'behavior';
            break;
                
            case 'mark': return 'result';
            break;
                
            case 'brand': return 'opportunity';
            break;
                
            case 'factory': return 'scholasticism';
            break;
                
            case 'assembly': return 'expression';
            break;
                
            case 'number': return 'mark';
            break;
                
            case 'reason': return 'value';
            break;
                
            case 'opportunity': return 'factory';
            break;
                
            case 'scholasticism': return 'value';
            break;
        }
    }
    
    concept(n) {
        switch(n) {
            case 'value': return 'assembly';
            break;
                
            case 'result': return 'expression';
            break;
                
            case 'function': return 'value';
            break;
                
            case 'behavior': return 'reason';
            break;
                
            case 'expression': return 'value';
            break;
                
            case 'proof': return 'factory';
            break;
                
            case 'concept': return 'brand';
            break;
                
            case 'mark': return 'reason';
            break;
                
            case 'brand': return 'scholasticism';
            break;
                
            case 'factory': return 'factory';
            break;
                
            case 'assembly': return 'opportunity';
            break;
                
            case 'number': return 'function';
            break;
                
            case 'reason': return 'concept';
            break;
                
            case 'opportunity': return 'value';
            break;
                
            case 'scholasticism': return 'assembly';
            break;
        }
    }
    
    mark(n) {
        switch(n) {
            case 'value': return 'concept';
            break;
                
            case 'result': return 'function';
            break;
                
            case 'function': return 'behavior';
            break;
                
            case 'behavior': return 'concept';
            break;
                
            case 'expression': return 'number';
            break;
                
            case 'proof': return 'scholasticism';
            break;
                
            case 'concept': return 'value';
            break;
                
            case 'mark': return 'expression';
            break;
                
            case 'brand': return 'assembly';
            break;
                
            case 'factory': return 'mark';
            break;
                
            case 'assembly': return 'scholasticism';
            break;
                
            case 'number': return 'assembly';
            break;
                
            case 'reason': return 'proof';
            break;
                
            case 'opportunity': return 'factory';
            break;
                
            case 'scholasticism': return 'assembly';
            break;
        }
    }
    
    brand(n) {
        switch(n) {
            case 'value': return 'function';
            break;
                
            case 'result': return 'concept';
            break;
                
            case 'function': return 'reason';
            break;
                
            case 'behavior': return 'scholasticism';
            break;
                
            case 'expression': return 'concept';
            break;
                
            case 'proof': return 'value';
            break;
                
            case 'concept': return 'expression';
            break;
                
            case 'mark': return 'reason';
            break;
                
            case 'brand': return 'concept';
            break;
                
            case 'factory': return 'value';
            break;
                
            case 'assembly': return 'expression';
            break;
                
            case 'number': return 'mark';
            break;
                
            case 'reason': return 'number';
            break;
                
            case 'opportunity': return 'opportunity';
            break;
                
            case 'scholasticism': return 'value';
            break;
        }
    }
    
    factory(n) {
        switch(n) {
            case 'value': return 'concept';
            break;
                
            case 'result': return 'expression';
            break;
                
            case 'function': return 'number';
            break;
                
            case 'behavior': return 'scholasticism';
            break;
                
            case 'expression': return 'brand';
            break;
                
            case 'proof': return 'assembly';
            break;
                
            case 'concept': return 'behavior';
            break;
                
            case 'mark': return 'value';
            break;
                
            case 'brand': return 'factory';
            break;
                
            case 'factory': return 'concept';
            break;
                
            case 'assembly': return 'concept';
            break;
                
            case 'number': return 'value';
            break;
                
            case 'reason': return 'opportunity';
            break;
                
            case 'opportunity': return 'value';
            break;
                
            case 'scholasticism': return 'expression';
            break;
        }
    }
    
    assembly(n) {
        switch(n) {
            case 'value': return 'behavior';
            break;
                
            case 'result': return 'behavior';
            break;
                
            case 'function': return 'number';
            break;
                
            case 'behavior': return 'value';
            break;
                
            case 'expression': return 'reason';
            break;
                
            case 'proof': return 'expression';
            break;
                
            case 'concept': return 'function';
            break;
                
            case 'mark': return 'value';
            break;
                
            case 'brand': return 'proof';
            break;
                
            case 'factory': return 'mark';
            break;
                
            case 'assembly': return 'scholasticism';
            break;
                
            case 'number': return 'assembly';
            break;
                
            case 'reason': return 'proof';
            break;
                
            case 'opportunity': return 'behavior';
            break;
                
            case 'scholasticism': return 'expression';
            break;
        }
    }
    
    number(n) {
        switch(n) {
            case 'value': return 'expression';
            break;
                
            case 'result': return 'expression';
            break;
                
            case 'function': return 'value';
            break;
                
            case 'behavior': return 'brand';
            break;
                
            case 'expression': return 'value';
            break;
                
            case 'proof': return 'factory';
            break;
                
            case 'concept': return 'scholasticism';
            break;
                
            case 'mark': return 'expression';
            break;
                
            case 'brand': return 'result';
            break;
                
            case 'factory': return 'value';
            break;
                
            case 'assembly': return 'mark';
            break;
                
            case 'number': return 'behavior';
            break;
                
            case 'reason': return 'brand';
            break;
                
            case 'opportunity': return 'expression';
            break;
                
            case 'scholasticism': return 'assembly';
            break;
        }
    }
    
    reason(n) {
        switch(n) {
            case 'value': return 'mark';
            break;
                
            case 'result': return 'factory';
            break;
                
            case 'function': return 'opportunity';
            break;
                
            case 'behavior': return 'factory';
            break;
                
            case 'expression': return 'behavior';
            break;
                
            case 'proof': return 'value';
            break;
                
            case 'concept': return 'factory';
            break;
                
            case 'mark': return 'concept';
            break;
                
            case 'brand': return 'assembly';
            break;
                
            case 'factory': return 'expression';
            break;
                
            case 'assembly': return 'brand';
            break;
                
            case 'number': return 'scholasticism';
            break;
                
            case 'reason': return 'concept';
            break;
                
            case 'opportunity': return 'value';
            break;
                
            case 'scholasticism': return 'concept';
            break;
        }
    }
    
    opportunity(n) {
        switch(n) {
            case 'value': return 'expression';
            break;
                
            case 'result': return 'behavior';
            break;
                
            case 'function': return 'brand';
            break;
                
            case 'behavior': return 'proof';
            break;
                
            case 'expression': return 'value';
            break;
                
            case 'proof': return 'opportunity';
            break;
                
            case 'concept': return 'assembly';
            break;
                
            case 'mark': return 'assembly';
            break;
                
            case 'brand': return 'mark';
            break;
                
            case 'factory': return 'concept';
            break;
                
            case 'assembly': return 'value';
            break;
                
            case 'number': return 'factory';
            break;
                
            case 'reason': return 'expression';
            break;
                
            case 'opportunity': return 'value';
            break;
                
            case 'scholasticism': return 'brand';
            break;
        }
    }
    
    scholasticism() {
        switch(n) {
            case 'value': return 'expression';
            break;
                
            case 'result': return 'proof';
            break;
                
            case 'function': return 'assembly';
            break;
                
            case 'behavior': return 'value';
            break;
                
            case 'expression': return 'scholasticism';
            break;
                
            case 'proof': return 'factory';
            break;
                
            case 'concept': return 'value';
            break;
                
            case 'mark': return 'concept';
            break;
                
            case 'brand': return 'factory';
            break;
                
            case 'factory': return 'expression';
            break;
                
            case 'assembly': return 'value';
            break;
                
            case 'number': return 'brand';
            break;
                
            case 'reason': return 'concept';
            break;
                
            case 'opportunity': return 'number';
            break;
                
            case 'scholasticism': return 'result';
            break;
        }
    }
}
