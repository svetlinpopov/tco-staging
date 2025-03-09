<x-layouts.frontend :title="'Button Components'">
    <div class="py-24 px-6 max-w-7xl mx-auto bg-[#C1B1A8]">
        <h1 class="text-3xl font-semibold text-blue-yankees mb-12">Button Components</h1>

        <!-- Button variants -->
        <div class="mb-16">
            <h2 class="text-2xl font-semibold mb-6">Basic Button Variants</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Primary Dark Button -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Primary Dark Button</h3>
                    <div class="space-y-4">
                        <div>
                            <x-ui.button variant="primary">Primary Dark</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="primary" href="#">Primary Dark Link</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="primary" disabled>Primary Dark Disabled</x-ui.button>
                        </div>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-primary</code>
                        </div>
                    </div>
                </div>

                <!-- Primary White Button -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Primary White Button</h3>
                    <div class="space-y-4">
                        <div>
                            <x-ui.button variant="primary-white">Primary White</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="primary-white" href="#">Primary White Link</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="primary-white" disabled>Primary White Disabled</x-ui.button>
                        </div>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-primary-white</code>
                        </div>
                    </div>
                </div>

                <!-- Secondary Button -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Secondary Button</h3>
                    <div class="space-y-4">
                        <div>
                            <x-ui.button variant="secondary">Secondary Button</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="secondary" href="#">Secondary Link</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="secondary" disabled>Secondary Disabled</x-ui.button>
                        </div>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-secondary</code>
                        </div>
                    </div>
                </div>

                <!-- Header Button -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Header Button</h3>
                    <div class="space-y-4">
                        <div>
                            <x-ui.button variant="header">Header Button</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="header" href="#">Header Link</x-ui.button>
                        </div>
                        <div>
                            <x-ui.button variant="header" disabled>Header Disabled</x-ui.button>
                        </div>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-header</code>
                        </div>
                    </div>
                </div>

                <!-- Language Selector Buttons -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Language Selector</h3>
                    <div class="space-y-4">
                        <div class="flex space-x-2">
                            <x-ui.lang-button locale="en" active />
                            <x-ui.lang-button locale="de" />
                            <x-ui.lang-button locale="fr" />
                            <x-ui.lang-button locale="es" />
                        </div>
                        <div class="flex space-x-2">
                            <x-ui.lang-button locale="en" disabled />
                            <span class="text-gray-600 text-sm ml-2">Disabled</span>
                        </div>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-lang-selector</code>
                        </div>
                    </div>
                </div>

                <!-- Menu Link Items -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Menu Link Items</h3>
                    <div class="space-y-2 w-full">
                        <x-ui.button variant="menu-item" class="active">Home</x-ui.button>
                        <x-ui.button variant="menu-item">About</x-ui.button>
                        <x-ui.button variant="menu-item">Services</x-ui.button>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-menu-item</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Arrow Buttons -->
        <div class="mb-16">
            <h2 class="text-2xl font-semibold mb-6">Arrow Buttons</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Arrow Dark Buttons -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Arrow Dark Buttons</h3>
                    <div class="space-y-4">
                        <div class="flex space-x-4 items-center">
                            <x-ui.arrow-button direction="left" variant="dark" />
                            <span class="text-sm">Left Arrow</span>
                        </div>
                        <div class="flex space-x-4 items-center">
                            <x-ui.arrow-button direction="right" variant="dark" />
                            <span class="text-sm">Right Arrow</span>
                        </div>
                        <div class="flex space-x-4 items-center">
                            <x-ui.arrow-button direction="left" variant="dark" disabled />
                            <span class="text-sm">Disabled Arrow</span>
                        </div>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-arrow.btn-arrow-dark</code>
                        </div>
                    </div>
                </div>

                <!-- Arrow White Buttons -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Arrow White Buttons</h3>
                    <div class="space-y-4">
                        <div class="flex space-x-4 items-center">
                            <x-ui.arrow-button direction="left" variant="white" />
                            <span class="text-sm">Left Arrow</span>
                        </div>
                        <div class="flex space-x-4 items-center">
                            <x-ui.arrow-button direction="right" variant="white" />
                            <span class="text-sm">Right Arrow</span>
                        </div>
                        <div class="flex space-x-4 items-center">
                            <x-ui.arrow-button direction="left" variant="white" disabled />
                            <span class="text-sm">Disabled Arrow</span>
                        </div>
                        <div class="pt-2 text-sm text-gray-600">
                            <code class="bg-gray-100 p-1 rounded">.btn.btn-arrow.btn-arrow-white</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Button Sizes -->
        <div class="mb-16">
            <h2 class="text-2xl font-semibold mb-6">Button Sizes</h2>
            <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                <div class="space-y-6">
                    <div class="flex flex-wrap items-end gap-4">
                        <x-ui.button variant="primary" class="btn-sm">Small Button</x-ui.button>
                        <x-ui.button variant="primary" class="btn-md">Default Button</x-ui.button>
                        <x-ui.button variant="primary" class="btn-lg">Large Button</x-ui.button>
                        <x-ui.button variant="primary" class="btn-xl">Extra Large Button</x-ui.button>
                    </div>
                    <div class="pt-2 text-sm text-gray-600">
                        <p><code class="bg-gray-100 p-1 rounded">.btn.btn-sm</code> - Small</p>
                        <p><code class="bg-gray-100 p-1 rounded">.btn.btn-md</code> - Medium (default)</p>
                        <p><code class="bg-gray-100 p-1 rounded">.btn.btn-lg</code> - Large</p>
                        <p><code class="bg-gray-100 p-1 rounded">.btn.btn-xl</code> - Extra Large</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Usage Examples -->
        <div>
            <h2 class="text-2xl font-semibold mb-6">Usage Examples</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- With Blade Component -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Using Blade Component</h3>
                    <div class="space-y-4">
                        <x-ui.button variant="primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Button with Icon
                        </x-ui.button>

                        <x-ui.button variant="secondary" href="#" wire:navigate>
                            Navigate Link
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </x-ui.button>

                        <pre class="text-sm bg-gray-50 p-3 rounded overflow-auto mt-4">
&lt;x-ui.button variant="primary"&gt;
    &lt;svg class="h-4 w-4 mr-2"&gt;...&lt;/svg&gt;
    Button with Icon
&lt;/x-ui.button&gt;

&lt;x-ui.button variant="secondary" href="#" wire:navigate&gt;
    Navigate Link
    &lt;svg class="h-4 w-4 ml-2"&gt;...&lt;/svg&gt;
&lt;/x-ui.button&gt;</pre>
                    </div>
                </div>

                <!-- With CSS Classes -->
                <div class="p-6 border rounded-lg bg-[#C1B1A8]">
                    <h3 class="font-semibold mb-4">Using CSS Classes</h3>
                    <div class="space-y-4">
                        <button class="btn btn-primary btn-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                            Download
                        </button>

                        <a href="#" class="btn btn-header">
                            Contact Us
                        </a>

                        <pre class="text-sm bg-gray-50 p-3 rounded overflow-auto mt-4">
&lt;button class="btn btn-primary btn-lg"&gt;
    &lt;svg class="h-4 w-4 mr-2"&gt;...&lt;/svg&gt;
    Download
&lt;/button&gt;

&lt;a href="#" class="btn btn-header"&gt;
    Contact Us
&lt;/a&gt;</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-layouts.frontend>
