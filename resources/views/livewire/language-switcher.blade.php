<div class="relative inline-block text-left language-dropdown-container">
    <button
        type="button"
        class="btn btn-lang-selector flex items-center"
        id="language-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @if(count($locales) <= 1) disabled @endif
    >
        {{ $this->getLocaleDisplay($currentLocale) }}
        @if(count($locales) > 1)
            <span class="ml-1 inline-block text-xs" aria-hidden="true">•</span>
        @endif
    </button>

    @if(count($locales) > 1)
        <div
            id="language-dropdown-menu"
            class="language-dropdown"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu-button"
            tabindex="-1"
            style="visibility: hidden; opacity: 0;"
        >
            <div class="py-1" role="none">
                @foreach($locales as $locale)
                    @if($locale !== $currentLocale)
                        <a
                            href="#"
                            class="nav-lang-item"
                            wire:click.prevent="switchLocale('{{ $locale }}')"
                            onclick="setTimeout(() => window.location.reload(), 50)"
                            role="menuitem"
                            tabindex="-1"
                            id="language-menu-item-{{ $loop->index }}"
                        >
                            <span class="bullet-point">•</span>
                            <span class="locale-text">{{ $this->getLocaleName($locale) }}</span>
                        </a>
                    @endif
                @endforeach
            </div>
        </div>
    @endif
</div>

<script>
    // Initialize dropdown functionality
    function initLanguageSwitcher() {
        const container = document.querySelector('.language-dropdown-container');
        const button = document.getElementById('language-menu-button');
        const dropdown = document.getElementById('language-dropdown-menu');

        if (!button || !dropdown || !container) return;

        // Show dropdown on hover
        container.addEventListener('mouseenter', function() {
            dropdown.style.opacity = "1";
            dropdown.style.visibility = "visible";
        });

        // Hide when mouse leaves container
        container.addEventListener('mouseleave', function() {
            dropdown.style.opacity = "0";
            dropdown.style.visibility = "hidden";
        });

        // Also toggle on click for mobile
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            if (dropdown.style.visibility === "visible") {
                dropdown.style.opacity = "0";
                dropdown.style.visibility = "hidden";
            } else {
                dropdown.style.opacity = "1";
                dropdown.style.visibility = "visible";
            }
        });

        // Hide when clicking elsewhere
        document.addEventListener('click', function() {
            dropdown.style.opacity = "0";
            dropdown.style.visibility = "hidden";
        });
    }

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
    } else {
        setTimeout(initLanguageSwitcher, 100);
    }

    // Re-initialize after Livewire updates
    document.addEventListener('livewire:navigated', function() {
        setTimeout(initLanguageSwitcher, 100);
    });
</script>
