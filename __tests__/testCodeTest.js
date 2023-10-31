test("mock implementation", () => {
    const mock = jest.fn(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});

test("also mock implementation", () => {
    const mock = jest.fn().mockImplementation(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});

test("mock implementation one time", () => {
    const mock = jest.fn().mockImplementationOnce(() =>"bar");
    
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
    
    expect(mock("baz")).toBe(undefined);
    expect(mock).toHaveBeenCalledWith("baz");
});

test("mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("bar");
    
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});

test("mock promise resolution", () => {
   const mock = jest.fn();
   mock.mockResolvedValue("bar");
   
   expect(mock("foo")).resolves.toBe("bar");
   expect(mock).toHaveBeenCalledWith("foo");
});

const mockFn = jest.fn((num) => num + 1); // mock function으로 만들기

mockFn(1);
mockFn(10);
test("두번째로 호출된 함수의 첫번째 인수는 1입니다.", () => {
	console.log(mockFn.mock.calls); // [ [1], [10]]
  	console.log(mockFn.mock.calls[1][0]); // 10 
 	console.log(mockFn.mock.results); // [ { type: 'return', value: 2 }, { type: 'return', value: 11 } ]	
});

const doAdd = (callback, a, b) => {
	callback(a + b);
};

test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(mockCallback, 1, 2);
    expect(mockCallback).toHaveBeenCalledWith(3);
});