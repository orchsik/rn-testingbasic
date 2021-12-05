Usage: jest.js [--config=<pathToConfigFile>] [TestPathPattern]

옵션:
  --help, -h                    도움말을 보여줍니다                       [여부]
  --version, -v                 Print the version and exit                [여부]
  --all                         The opposite of `onlyChanged`. If `onlyChanged`
                                is set by default, running jest with `--all`
                                will force Jest to run all tests instead of
                                running only tests related to changed files.
                                                                          [여부]
  --automock                    Automock all files by default.            [여부]
  --bail, -b                    Exit the test suite immediately after `n` number
                                of failing tests.                         [여부]
  --browser                     Respect the "browser" field in package.json when
                                resolving modules. Some packages export
                                different versions based on whether they are
                                operating in node.js or a browser.        [여부]
  --cache                       Whether to use the transform cache. Disable the
                                cache using --no-cache.                   [여부]
  --cacheDirectory              The directory where Jest should store its cached
                                dependency information.                 [문자열]
  --changedFilesWithAncestor    Runs tests related to the current changes and
                                the changes made in the last commit. Behaves
                                similarly to `--onlyChanged`.             [여부]
  --changedSince                Runs tests related to the changes since the
                                provided branch. If the current branch has
                                diverged from the given branch, then only
                                changes made locally will be tested. Behaves
                                similarly to `--onlyChanged`.           [문자열]
  --ci                          Whether to run Jest in continuous integration
                                (CI) mode. This option is on by default in most
                                popular CI environments. It will prevent
                                snapshots from being written unless explicitly
                                requested.                  [여부] [기본: false]
  --clearCache                  Clears the configured Jest cache directory and
                                then exits. Default directory can be found by
                                calling jest --showConfig                 [여부]
  --clearMocks                  Automatically clear mock calls and instances
                                between every test. Equivalent to calling
                                jest.clearAllMocks() between each test.   [여부]
  --collectCoverage             Alias for --coverage.                     [여부]
  --collectCoverageFrom         A glob pattern relative to <rootDir> matching
                                the files that coverage info needs to be
                                collected from.                         [문자열]
  --collectCoverageOnlyFrom     Explicit list of paths coverage will be
                                restricted to.                            [배열]
  --color                       Forces test results output color highlighting
                                (even if stdout is not a TTY). Set to false if
                                you would like to have no colors.         [여부]
  --colors                      Alias for `--color`.                      [여부]
  --config, -c                  The path to a jest config file specifying how to
                                find and execute tests. If no rootDir is set in
                                the config, the directory containing the config
                                file is assumed to be the rootDir for the
                                project.This can also be a JSON encoded value
                                which Jest will use as configuration.   [문자열]
  --coverage                    Indicates that test coverage information should
                                be collected and reported in the output.  [여부]
  --coverageDirectory           The directory where Jest should output its
                                coverage files.                         [문자열]
  --coveragePathIgnorePatterns  An array of regexp pattern strings that are
                                matched against all file paths before executing
                                the test. If the file pathmatches any of the
                                patterns, coverage information will be skipped.
                                                                          [배열]
  --coverageProvider            Select between Babel and V8 to collect coverage
                                                           [선택: "babel", "v8"]
  --coverageReporters           A list of reporter names that Jest uses when
                                writing coverage reports. Any istanbul reporter
                                can be used.                              [배열]
  --coverageThreshold           A JSON string with which will be used to
                                configure minimum threshold enforcement for
                                coverage results                        [문자열]
  --debug                       Print debugging info about your jest config.
                                                                          [여부]
  --detectLeaks                 **EXPERIMENTAL**: Detect memory leaks in tests.
                                After executing a test, it will try to garbage
                                collect the global object used, and fail if it
                                was leaked                  [여부] [기본: false]
  --detectOpenHandles           Print out remaining open handles preventing Jest
                                from exiting at the end of a test run. Implies
                                `runInBand`.                [여부] [기본: false]
  --env                         The test environment used for all tests. This
                                can point to any file or node module. Examples:
                                `jsdom`, `node` or `path/to/my-environment.js`
                                                                        [문자열]
  --errorOnDeprecated           Make calling deprecated APIs throw helpful error
                                messages.                   [여부] [기본: false]
  --expand, -e                  Use this flag to show full diffs instead of a
                                patch.                                    [여부]
  --filter                      Path to a module exporting a filtering function.
                                This method receives a list of tests which can
                                be manipulated to exclude tests from running.
                                Especially useful when used in conjunction with
                                a testing infrastructure to filter known broken
                                tests.                                  [문자열]
  --findRelatedTests            Find related tests for a list of source files
                                that were passed in as arguments. Useful for
                                pre-commit hook integration to run the minimal
                                amount of tests necessary.                [여부]
  --forceExit                   Force Jest to exit after all tests have
                                completed running. This is useful when resources
                                set up by test code cannot be adequately cleaned
                                up.                                       [여부]
  --globalSetup                 The path to a module that runs before All Tests.
                                                                        [문자열]
  --globalTeardown              The path to a module that runs after All Tests.
                                                                        [문자열]
  --globals                     A JSON string with map of global variables that
                                need to be available in all test environments.
                                                                        [문자열]
  --haste                       A JSON string with map of variables for the
                                haste module system                     [문자열]
  --init                        Generate a basic configuration file       [여부]
  --injectGlobals               Should Jest inject global variables or not[여부]
  --json                        Prints the test results in JSON. This mode will
                                send all other test output and user messages to
                                stderr.                                   [여부]
  --lastCommit                  Run all tests affected by file changes in the
                                last commit made. Behaves similarly to
                                `--onlyChanged`.                          [여부]
  --listTests                   Lists all tests Jest will run given the
                                arguments and exits. Most useful in a CI system
                                together with `--findRelatedTests` to determine
                                the tests Jest will run based on specific files
                                                            [여부] [기본: false]
  --logHeapUsage                Logs the heap usage after every test. Useful to
                                debug memory leaks. Use together with
                                `--runInBand` and `--expose-gc` in node.  [여부]
  --mapCoverage                 Maps code coverage reports against original
                                source code when transformers supply source
                                maps.

                                DEPRECATED                                [여부]
  --maxConcurrency              Specifies the maximum number of tests that are
                                allowed to runconcurrently. This only affects
                                tests using `test.concurrent`.  [숫자] [기본: 5]
  --maxWorkers, -w              Specifies the maximum number of workers the
                                worker-pool will spawn for running tests. This
                                defaults to the number of the cores available on
                                your machine. (its usually best not to override
                                this default)                           [문자열]
  --moduleDirectories           An array of directory names to be searched
                                recursively up from the requiring module's
                                location.                                 [배열]
  --moduleFileExtensions        An array of file extensions your modules use.
                                If you require modules without specifying a
                                file extension, these are the extensions Jest
                                will look for.                            [배열]
  --moduleNameMapper            A JSON string with a map from regular
                                expressions to module names or to arrays of
                                module names that allow to stub out resources,
                                like images or styles with a single module
                                                                        [문자열]
  --modulePathIgnorePatterns    An array of regexp pattern strings that are
                                matched against all module paths before those
                                paths are to be considered "visible" to the
                                module loader.                            [배열]
  --modulePaths                 An alternative API to setting the NODE_PATH env
                                variable, modulePaths is an array of absolute
                                paths to additional locations to search when
                                resolving modules.                        [배열]
  --noStackTrace                Disables stack trace in test results output
                                                                          [여부]
  --notify                      Activates notifications for test results. [여부]
  --notifyMode                  Specifies when notifications will appear for
                                test results.  [문자열] [기본: "failure-change"]
  --onlyChanged, -o             Attempts to identify which tests to run based on
                                which files have changed in the current
                                repository. Only works if you're running tests
                                in a git or hg repository at the moment.  [여부]
  --onlyFailures, -f            Run tests that failed in the previous execution.
                                                                          [여부]
  --outputFile                  Write test results to a file when the --json
                                option is also specified.               [문자열]
  --passWithNoTests             Will not fail if no tests are found (for example
                                while using `--testPathPattern`.)
                                                            [여부] [기본: false]
  --preset                      A preset that is used as a base for Jest's
                                configuration.                          [문자열]
  --prettierPath                The path to the "prettier" module used for
                                inline snapshots.                       [문자열]
  --projects                    A list of projects that use Jest to run all
                                tests of all projects in a single instance of
                                Jest.                                     [배열]
  --reporters                   A list of custom reporters for the test suite.
                                                                          [배열]
  --resetMocks                  Automatically reset mock state between every
                                test. Equivalent to calling jest.resetAllMocks()
                                between each test.                        [여부]
  --resetModules                If enabled, the module registry for every test
                                file will be reset before running each
                                individual test.                          [여부]
  --resolver                    A JSON string which allows the use of a custom
                                resolver.                               [문자열]
  --restoreMocks                Automatically restore mock state and
                                implementation between every test. Equivalent to
                                calling jest.restoreAllMocks() between each
                                test.                                     [여부]
  --rootDir                     The root directory that Jest should scan for
                                tests and modules within.               [문자열]
  --roots                       A list of paths to directories that Jest should
                                use to search for files in.               [배열]
  --runInBand, -i               Run all tests serially in the current process
                                (rather than creating a worker pool of child
                                processes that run tests). This is sometimes
                                useful for debugging, but such use cases are
                                pretty rare.                              [여부]
  --runTestsByPath              Used when provided patterns are exact file
                                paths. This avoids converting them into a
                                regular expression and matching it against every
                                single file.                [여부] [기본: false]
  --runner                      Allows to use a custom runner instead of Jest's
                                default test runner.                    [문자열]
  --selectProjects              Run only the tests of the specified
                                projects.Jest uses the attribute `displayName`
                                in the configuration to identify each project.
                                                                          [배열]
  --setupFiles                  A list of paths to modules that run some code
                                to configure or set up the testing environment
                                before each test.                         [배열]
  --setupFilesAfterEnv          A list of paths to modules that run some code
                                to configure or set up the testing framework
                                before each test                          [배열]
  --showConfig                  Print your jest config and then exits.    [여부]
  --silent                      Prevent tests from printing messages through the
                                console.                                  [여부]
  --skipFilter                  Disables the filter provided by --filter. Useful
                                for CI jobs, or local enforcement when fixing
                                tests.                                    [여부]
  --snapshotSerializers         A list of paths to snapshot serializer modules
                                Jest should use for snapshot testing.     [배열]
  --testEnvironment             Alias for --env                         [문자열]
  --testEnvironmentOptions      Test environment options that will be passed to
                                the testEnvironment. The relevant options depend
                                on the environment.                     [문자열]
  --testFailureExitCode         Exit code of `jest` command if the test run
                                failed                                  [문자열]
  --testLocationInResults       Add `location` information to the test results
                                                            [여부] [기본: false]
  --testMatch                   The glob patterns Jest uses to detect test
                                files.                                    [배열]
  --testNamePattern, -t         Run only tests with a name that matches the
                                regex pattern.                          [문자열]
  --testPathIgnorePatterns      An array of regexp pattern strings that are
                                matched against all test paths before executing
                                the test. If the test path matches any of the
                                patterns, it will be skipped.             [배열]
  --testPathPattern             A regexp pattern string that is matched against
                                all tests paths before executing the test.[배열]
  --testRegex                   A string or array of string regexp patterns that
                                Jest uses to detect test files.           [배열]
  --testResultsProcessor        Allows the use of a custom results processor.
                                This processor must be a node module that
                                exports a function expecting as the first
                                argument the result object.             [문자열]
  --testRunner                  Allows to specify a custom test runner. The
                                default is  `jasmine2`. A path to a custom test
                                runner can be provided:
                                `<rootDir>/path/to/testRunner.js`.      [문자열]
  --testSequencer               Allows to specify a custom test sequencer. The
                                default is `@jest/test-sequencer`. A path to a
                                custom test sequencer can be provided:
                                `<rootDir>/path/to/testSequencer.js`    [문자열]
  --testTimeout                 This option sets the default timeouts of test
                                cases.                                    [숫자]
  --testURL                     This option sets the URL for the jsdom
                                environment.                            [문자열]
  --timers                      Setting this value to fake allows the use of
                                fake timers for functions such as setTimeout.
                                                                        [문자열]
  --transform                   A JSON string which maps from regular
                                expressions to paths to transformers.   [문자열]
  --transformIgnorePatterns     An array of regexp pattern strings that are
                                matched against all source file paths before
                                transformation.                           [배열]
  --unmockedModulePathPatterns  An array of regexp pattern strings that are
                                matched against all modules before the module
                                loader will automatically return a mock for
                                them.                                     [배열]
  --updateSnapshot, -u          Use this flag to re-record snapshots. Can be
                                used together with a test suite pattern or with
                                `--testNamePattern` to re-record snapshot for
                                test matching the pattern                 [여부]
  --useStderr                   Divert all output to stderr.              [여부]
  --verbose                     Display individual test results with the test
                                suite hierarchy.                          [여부]
  --watch                       Watch files for changes and rerun tests related
                                to changed files. If you want to re-run all
                                tests when a file has changed, use the
                                `--watchAll` option.                      [여부]
  --watchAll                    Watch files for changes and rerun all tests. If
                                you want to re-run only the tests related to the
                                changed files, use the `--watch` option.  [여부]
  --watchPathIgnorePatterns     An array of regexp pattern strings that are
                                matched against all paths before trigger test
                                re-run in watch mode. If the test path matches
                                any of the patterns, it will be skipped.  [배열]
  --watchman                    Whether to use watchman for file crawling.
                                Disable using --no-watchman.              [여부]