const {
    debounce,
    throttle,
    once,
    memoize,
    generateUUID,
    downloadFile,
    formatBytes
  } = require("../src/utils");
  
  describe('Function Utility Tests', () => {
  
    jest.useFakeTimers();
  
    test('debounce should limit the rate at which a function is executed', () => {
      const func = jest.fn();
      const debouncedFunc = debounce(func, 1000);
      debouncedFunc();
      debouncedFunc();
      debouncedFunc();
      jest.runAllTimers();
      expect(func).toHaveBeenCalledTimes(1);
    });
  
    test('throttle should ensure a function is called at most once in a specified period', () => {
      const func = jest.fn();
      const throttledFunc = throttle(func, 1000);
      throttledFunc();
      throttledFunc();
      throttledFunc();
      jest.advanceTimersByTime(1000);
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });
  
    test('once should ensure a function is called only once', () => {
      const func = jest.fn();
      const onceFunc = once(func);
      onceFunc();
      onceFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });
  
    test('memoize should cache the results of a function', () => {
      const func = jest.fn(x => x * 2);
      const memoizedFunc = memoize(func);
      expect(memoizedFunc(2)).toBe(4);
      expect(memoizedFunc(2)).toBe(4);
      expect(func).toHaveBeenCalledTimes(1);
      expect(memoizedFunc(3)).toBe(6);
      expect(func).toHaveBeenCalledTimes(2);
    });
  
    test('generateUUID should generate a valid UUID', () => {
      const uuid = generateUUID();
      expect(uuid).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      );
    });
  
    test('downloadFile should create a download link and trigger the download', () => {
        // Mock URL.createObjectURL
        const mockCreateObjectURL = jest.fn(() => 'blob:http://example.com/blob');
        global.URL.createObjectURL = mockCreateObjectURL;
    
        // Mock document.createElement
        const mockCreateElement = jest.spyOn(document, 'createElement').mockImplementation(() => ({
            href: '',
            download: '',
            click: jest.fn(),
        }));
    
        // Mock appendChild and removeChild
        const mockAppendChild = jest.spyOn(document.body, 'appendChild').mockImplementation(() => {});
        const mockRemoveChild = jest.spyOn(document.body, 'removeChild').mockImplementation(() => {});
    
        // Call the function
        downloadFile('test.txt', 'Hello, world!', 'text/plain');
    
        // Assertions
        expect(mockCreateElement).toHaveBeenCalledWith('a'); // Ensure 'a' element was created
        expect(mockCreateObjectURL).toHaveBeenCalled(); // Ensure URL.createObjectURL was called
        expect(mockAppendChild).toHaveBeenCalled(); // Ensure the element was appended to the body
        expect(mockRemoveChild).toHaveBeenCalled(); // Ensure the element was removed from the body
    
        // Clean up mocks
        mockCreateElement.mockRestore();
        mockAppendChild.mockRestore();
        mockRemoveChild.mockRestore();
        delete global.URL.createObjectURL;
    });
  
    test('formatBytes should format bytes as a human-readable string', () => {
      expect(formatBytes(1024)).toBe('1.00 KB');
      expect(formatBytes(1234, 2)).toBe('1.21 KB');
      expect(formatBytes(0)).toBe('0 Bytes');
      expect(formatBytes(1024 * 1024)).toBe('1.00 MB');
    });
  
  });
  