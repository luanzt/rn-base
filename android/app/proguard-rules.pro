# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# When Proguard is enabled (which it is by default for Android release builds), it causes runtime error. 
# To avoid this, add an exception to android/app/proguard-rules.pro:
-keep public class com.horcrux.svg.** {*;}